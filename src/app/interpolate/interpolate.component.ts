import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/Formation';

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {

  nom: string = 'Bewizyu';
  prenom: string = 'mimi';

  formation: Formation = new Formation('Module Angular', 'module pour apprendre Angular');

  constructor() { }

  ngOnInit() {
  }

  getFullname(): string {
    return ` => getFullname : ${this.nom} => ${this.prenom} `;
  }
}
