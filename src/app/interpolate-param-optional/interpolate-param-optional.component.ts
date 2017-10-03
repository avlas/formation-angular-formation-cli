import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/Formation';

@Component({
  selector: 'app-interpolate-param-optional',
  templateUrl: './interpolate-param-optional.component.html',
  styleUrls: ['./interpolate-param-optional.component.css']
})
export class InterpolateParamOptionalComponent implements OnInit {

  formation: Formation = new Formation('Module Angular', 'module pour apprendre Angular');

  formationJS: Formation;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.formationJS = new Formation('Module formationJS');
    }, 3000);
  }
}
