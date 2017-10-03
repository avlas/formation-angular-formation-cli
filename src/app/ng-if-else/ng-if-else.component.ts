import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-else',
  templateUrl: './ng-if-else.component.html',
  styleUrls: ['./ng-if-else.component.css']
})
export class NgIfElseComponent implements OnInit {

  isDisplay: boolean = true;

  constructor() { }

  ngOnInit() {
      setInterval(() => {
        this.isDisplay = !this.isDisplay;
      }, 1000);
  }

}
