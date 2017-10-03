import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

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
