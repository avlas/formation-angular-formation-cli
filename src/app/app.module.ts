import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { InterpolateComponent } from './interpolate/interpolate.component';
import { InterpolateOptionalComponent } from './interpolate-optional/interpolate-optional.component';
import { BindingProprieteComponent } from './binding-propriete/binding-propriete.component';

@NgModule({
  declarations: [ AppComponent, FormationComponent, InterpolateComponent, InterpolateOptionalComponent, BindingProprieteComponent ],
  imports: [  BrowserModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
