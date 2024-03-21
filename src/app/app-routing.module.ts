import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChidappComponent } from './chidapp/chidapp.component';
import { ComponentoneComponent } from './componentone/componentone.component';
import { ComponenttwoComponent } from './componenttwo/componenttwo.component';
import { ComponentthreeComponent } from './componentthree/componentthree.component';
import { ViewchildoneComponent } from './viewchildone/viewchildone.component';
import { ViewchildtwoComponent } from './viewchildtwo/viewchildtwo.component';
import { SignaloneComponent } from './signalone/signalone.component';
import { MethodsComponent } from './methods/methods.component';
const routes: Routes = [
  {path:'childapp',component:ChidappComponent},
  {path:'component-one',component:ComponentoneComponent},
  {path:'component-two',component:ComponenttwoComponent},
  {path:'component-three',component:ComponentthreeComponent},
  {path:'viewchild-one',component:ViewchildoneComponent},
  {path:'viewchild-two',component:ViewchildtwoComponent},
  {path:'signal-one',component:SignaloneComponent},
  {path:'methods',component:MethodsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
