import { Observable } from "rxjs/Observable";
var fs = require('fs');
var TranslateUniversalLoader = /** @class */ (function () {
    function TranslateUniversalLoader(prefix, suffix) {
        if (prefix === void 0) { prefix = 'i18n'; }
        if (suffix === void 0) { suffix = '.json'; }
        this.prefix = prefix;
        this.suffix = suffix;
    }
    TranslateUniversalLoader.prototype.getTranslation = function (lang) {
        var _this = this;
        return Observable.create(function (observer) {
            observer.next(JSON.parse(fs.readFileSync(_this.prefix + "/" + lang + _this.suffix, 'utf8')));
            observer.complete();
        });
    };
    return TranslateUniversalLoader;
}());
export { TranslateUniversalLoader };
//# sourceMappingURL=translate-universal-loader.service.js.map