import { Routes } from '@angular/router';
import { ProfileComponent } from './Profile/Profile.component';
import { AccountComponent } from './Account/Account.component';
import { CollaborationComponent } from './Collaboration/Collaboration.component';
import { EditProfileComponent } from './EditProfile/EditProfile.component';
import { CurrentUserResover } from 'src/app/_resolvers/current-user.resolver';

export const AdminAccountRoutes: Routes = [
   {
      path: '',
      resolve: { user: CurrentUserResover },
      component: AccountComponent,
      children: [
         {
            path: '',
            redirectTo: "profile"
         },
         {
            path: 'profile',
            resolve: { user: CurrentUserResover },
            component: ProfileComponent
         },
         {
            path: 'collaboration',
            component: CollaborationComponent
         },
         {
            path: 'profile/edit',
            resolve: { user: CurrentUserResover },
            component: EditProfileComponent
         },
      ]
   }
];
