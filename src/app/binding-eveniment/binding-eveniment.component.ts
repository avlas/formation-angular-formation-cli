import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-eveniment',
  templateUrl: './binding-eveniment.component.html',
  styleUrls: ['./binding-eveniment.component.css']
})
export class BindingEvenimentComponent implements OnInit {

  isHidden: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  handleClick():void {
    console.log('Button a ete clicke');
    this.isHidden = !this.isHidden;
  }

  survol(event):void {
    console.log('survol :', event);
  }

  dehors(event):void {
    console.log('dehors :', event);
  }
}
