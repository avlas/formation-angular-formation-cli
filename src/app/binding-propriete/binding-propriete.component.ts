import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-propriete',
  templateUrl: './binding-propriete.component.html',
  styleUrls: ['./binding-propriete.component.css']
})
export class BindingProprieteComponent implements OnInit {

  isHidden: boolean = true;

  color: string = 'green';

  constructor() { }

  ngOnInit() {
    setInterval(
      () => {
        this.isHidden = !this.isHidden;
        this.color = (this.color === 'green') ? 'red' : 'green';
      }, 2000);
  }

}
