import {Component, Input, OnInit} from '@angular/core';
import { Formation } from '../model/Formation';

@Component({
  selector: 'app-formation-item-input',
  templateUrl: './formation-item-input.component.html',
  styleUrls: ['./formation-item-input.component.css']
})
export class FormationItemInputComponent implements OnInit {

  @Input()
  formation: Formation;

  constructor() { }

  ngOnInit() {
  }

}
