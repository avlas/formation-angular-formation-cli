import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/Formation';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  formations: Array<Formation> = [];

  constructor() { }

  ngOnInit() {
      this.formations = [
          new Formation('Module Angular'),
          new Formation('Module JavaScript'),
          new Formation('Module TypeScript'),
      ];
  }

  getColorByElement(isFirst: boolean = false, isLast: boolean = false) {
        return isFirst ? 'red' :  isLast ? 'green' : 'black';
  }

  getBgColorByElement(isEven: boolean = false) {
      return isEven ? 'grey' : 'white';
  }
}
