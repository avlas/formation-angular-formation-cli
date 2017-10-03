import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/Formation';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

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
