import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/Formation';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  formations: Array<Formation> = [];

  constructor() { }

  ngOnInit() {
    this.formations = [
        new Formation('Module Angular'),
        new Formation('Module JavaScript'),
        new Formation('Module TypeScript'),
    ];
  }

  handleFormationSelected(formation): void {
      alert(formation.toString());
      console.log(' Formation selectione : ', formation.toString());
  }
}
