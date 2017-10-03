import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { InterpolateComponent } from './interpolate/interpolate.component';
import { InterpolateParamOptionalComponent } from './interpolate-param-optional/interpolate-param-optional.component';
import { BindingProprieteComponent } from './binding-propriete/binding-propriete.component';
import { BindingEvenimentComponent } from './binding-eveniment/binding-eveniment.component';
import { VariableLocaleComponent } from './variable-locale/variable-locale.component';

@NgModule({
  declarations: [ AppComponent, FormationComponent, InterpolateComponent, InterpolateParamOptionalComponent, BindingProprieteComponent, BindingEvenimentComponent, VariableLocaleComponent ],
  imports: [  BrowserModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
