import { Routes } from '@angular/router';
import { AboutUsComponent } from './AboutUs/AboutUs.component';
import { ContactComponent } from './Contact/Contact.component';
import { FaqComponent } from './Faq/Faq.component';
import { TermAndConditionComponent } from './TermAndCondition/TermAndCondition.component';
import { PrivacyPolicyComponent } from './PrivacyPolicy/PrivacyPolicy.component';

const subPageTitle = ' - Page';
export const AboutRoutes: Routes = [
  {
    path: 'about',
    component: AboutUsComponent,
    data: { title: 'About Us' + subPageTitle },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact Us' + subPageTitle },
  },
  {
    path: 'faq',
    component: FaqComponent,
    data: { title: 'FAQ' + subPageTitle },
  },
  {
    path: 'term-condition',
    component: TermAndConditionComponent,
    data: { title: 'Terms & Conditions' + subPageTitle },
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    data: { title: 'Privacy Policy' + subPageTitle },
  },
];
