import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Formation } from '../model/Formation';

@Component({
  selector: 'app-lifecycle-onchange',
  templateUrl: './lifecycle-onchange.component.html',
  styleUrls: ['./lifecycle-onchange.component.css']
})
export class LifecycleOnchangeComponent implements OnInit, OnChanges {

  @Input()
  formation: Formation;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges) {
    const f = change['formation'];
    if (f.previousValue) {
        console.log(`Previous : ${f.previousValue.nom}`);
    }
    console.log(`Current : ${f.currentValue.nom}`);
  }

}
