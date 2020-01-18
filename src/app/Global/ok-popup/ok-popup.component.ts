import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ok-popup',
  templateUrl: './ok-popup.component.html',
  styleUrls: ['./ok-popup.component.scss']
})
export class OkPopupComponent implements OnInit {

  messages: string[];
  mainMessage: string;
  succeeded: boolean;

  constructor(public dialogRef: MatDialogRef<OkPopupComponent>) { }

  ngOnInit() {
    this.mainMessage = this.messages.pop();
    this.succeeded = this.messages.length == 0 ? true : false;
  }

}
