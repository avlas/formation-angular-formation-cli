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
        new Formation('Module Angular', 'desc angular', 1500.50, new Date(2014, 9, 20), new Date(2017, 9, 20) ),
        new Formation('Module JavaScript', 'desc JS', 1000.50, new Date(2013, 9, 12), new Date(2016, 12, 16) ),
        new Formation('Module TypeScript', 'desc TS', 500.50, new Date(2013, 5, 4), new Date(2015, 5, 15) )
    ];
  }

}
