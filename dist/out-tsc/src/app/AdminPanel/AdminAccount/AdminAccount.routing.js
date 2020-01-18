import { ProfileComponent } from './Profile/Profile.component';
import { AccountComponent } from './Account/Account.component';
import { CollaborationComponent } from './Collaboration/Collaboration.component';
import { EditProfileComponent } from './EditProfile/EditProfile.component';
export var AdminAccountRoutes = [
    {
        path: '',
        component: AccountComponent,
        children: [
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'collaboration',
                component: CollaborationComponent
            },
            {
                path: 'profile/edit',
                component: EditProfileComponent
            },
        ]
    }
];
//# sourceMappingURL=AdminAccount.routing.js.map