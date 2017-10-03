import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/Formation';

const NOM_ANGULAR: string = 'Module Angular';
const NOM_JS: string = 'Module JavaScript';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  formation: Formation = new Formation(NOM_ANGULAR);

  constructor() { }

  ngOnInit() {
    setInterval(()=> {
        this.formation = new Formation(this.formation.nom === NOM_ANGULAR ? NOM_JS : NOM_ANGULAR);
    }, 1000);
  }

}
