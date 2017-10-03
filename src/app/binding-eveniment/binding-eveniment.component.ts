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

  handleClick(event):void {
      console.log('Boutton a ete clique : ', event);

      this.isHidden = !this.isHidden;
  }
}
