import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  isDisplay: boolean = true;

  constructor() { }

  ngOnInit() {
      setInterval(() => {
        this.isDisplay = !this.isDisplay;
      }, 1000);
  }
}
