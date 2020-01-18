import { RegisterComponent } from './Register/Register.component';
import { SignInComponent } from './SignIn/SignIn.component';
import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component';
import { ThankYouComponent } from './ThankYou/ThankYou.component';
import { ResetPasswordComponent } from './ResetPassword/ResetPassword.component';
export var SessionRoutes = [
    {
        path: '',
        component: SignInComponent
    },
    {
        path: 'signin',
        component: SignInComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: 'thank-you',
        component: ThankYouComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent
    }
];
//# sourceMappingURL=Session.routing.js.map