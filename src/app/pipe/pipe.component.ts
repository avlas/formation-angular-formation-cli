import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/Formation';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  formations: Array<Formation> = [];

  constructor() { }

  ngOnInit() {
    this.formations = [
        new Formation('Module Angular', 'desc angular', 1500, new Date(), new Date() ),
        new Formation('Module JavaScript', 'desc JS', 1000, new Date(), new Date() ),
        new Formation('Module TypeScript', 'desc TS', 500, new Date(), new Date() )
    ];
  }

}
