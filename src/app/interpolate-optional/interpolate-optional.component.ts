import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/Formation';

@Component({
  selector: 'app-interpolate-optional',
  templateUrl: './interpolate-optional.component.html',
  styleUrls: ['./interpolate-optional.component.css']
})
export class InterpolateOptionalComponent implements OnInit {
  formation: Formation = new Formation('Module Angular', 'module pour apprendre Angular');

  formationJS: Formation;

  constructor() { }

  ngOnInit() {
  }
}
