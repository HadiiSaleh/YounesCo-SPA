import { SigninComponent } from './Signin/Signin.component';
import { PaymentComponent } from './Payment/Payment.component';
import { FinalReceiptComponent } from './FinalReceipt/FinalReceipt.component';
export var CheckoutRoutes = [
    {
        path: "",
        component: SigninComponent
    },
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: 'payment',
        component: PaymentComponent
    },
    {
        path: 'final-receipt',
        component: FinalReceiptComponent
    }
];
//# sourceMappingURL=Checkout.routing.js.map