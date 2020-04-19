// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import { join } from 'path';
// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();
// Express server
var app = express();
var PORT = process.env.PORT || 4000;
var DIST_FOLDER = join(process.cwd(), 'dist');
// * NOTE :: leave this as require() since this file is built Dynamically from webpack
var _a = require('./dist/server/main'), AppServerModuleNgFactory = _a.AppServerModuleNgFactory, LAZY_MODULE_MAP = _a.LAZY_MODULE_MAP;
// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));
app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));
// TODO: implement data requests securely
app.get('/api/*', function (req, res) {
    res.status(404).send('data requests are not supported');
});
// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));
// All regular routes use the Universal engine
app.get('*', function (req, res) {
    res.render('index', { req: req });
});
// Start up the Node server
app.listen(PORT, function () {
    console.log("Node server listening on http://localhost:" + PORT);
});
//# sourceMappingURL=server.js.map