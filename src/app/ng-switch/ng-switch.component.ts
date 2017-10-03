import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/Formation';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  formations: Array<Formation> = [];

  constructor() { }

  ngOnInit() {
    this.formations = [
      new Formation('Module Angular'),
      new Formation('Module JavaScript'),
      new Formation('Module TypeScript'),
    ];
  }

}
