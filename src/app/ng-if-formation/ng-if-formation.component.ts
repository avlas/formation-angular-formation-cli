import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/Formation';

@Component({
  selector: 'app-ng-if-formation',
  templateUrl: './ng-if-formation.component.html',
  styleUrls: ['./ng-if-formation.component.css']
})
export class NgIfFormationComponent implements OnInit {
  isDisplay: boolean = true;

  formation: Formation = new Formation('Module Angular', 'module pour apprendre Angular');

  constructor() { }

  ngOnInit() {
  }

  onClick():void {
      console.log('Button a ete clicke');

    this.isDisplay = (this.isDisplay === false) ? true : false;
  }

}
