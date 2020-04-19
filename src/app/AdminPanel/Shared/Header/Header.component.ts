import { Component, OnInit } from '@angular/core';
import { AdminPanelServiceService } from '../../Service/AdminPanelService.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

	constructor(private coreService : AdminPanelServiceService) { }

	ngOnInit() {
   }
   
   toggleSidebar() {
      this.coreService.sidenavOpen = !this.coreService.sidenavOpen;
   }

}
