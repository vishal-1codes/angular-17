import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChidappComponent } from './chidapp/chidapp.component';
import { ComponentoneComponent } from './componentone/componentone.component';
import { ComponenttwoComponent } from './componenttwo/componenttwo.component';
import { ComponentthreeComponent } from './componentthree/componentthree.component';
const routes: Routes = [
  {path:'childapp',component:ChidappComponent},
  {path:'component-one',component:ComponentoneComponent},
  {path:'component-two',component:ComponenttwoComponent},
  {path:'component-three',component:ComponentthreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
