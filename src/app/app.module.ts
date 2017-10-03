import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { InterpolateComponent } from './interpolate/interpolate.component';
import { InterpolateParamOptionalComponent } from './interpolate-param-optional/interpolate-param-optional.component';
import { BindingProprieteComponent } from './binding-propriete/binding-propriete.component';
import { BindingEvenimentComponent } from './binding-eveniment/binding-eveniment.component';
import { VariableLocaleComponent } from './variable-locale/variable-locale.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgIfElseComponent } from './ng-if-else/ng-if-else.component';
import { NgIfFormationComponent } from './ng-if-formation/ng-if-formation.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgStyleComponent } from './ng-style/ng-style.component';

@NgModule({
  declarations: [ AppComponent, FormationComponent, InterpolateComponent, InterpolateParamOptionalComponent, BindingProprieteComponent, BindingEvenimentComponent, VariableLocaleComponent, NgIfComponent, NgIfElseComponent, NgIfFormationComponent, NgForComponent, NgSwitchComponent, NgStyleComponent ],
  imports: [  BrowserModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
