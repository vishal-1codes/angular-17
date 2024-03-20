import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChidappComponent } from './chidapp/chidapp.component';
import { ComponentoneComponent } from './componentone/componentone.component';
import { ComponenttwoComponent } from './componenttwo/componenttwo.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentthreeComponent } from './componentthree/componentthree.component';
import { ViewchildoneComponent } from './viewchildone/viewchildone.component';
import { ViewchildtwoComponent } from './viewchildtwo/viewchildtwo.component';
@NgModule({
  declarations: [
    AppComponent,
    ChidappComponent,
    ComponentoneComponent,
    ComponenttwoComponent,
    ComponentthreeComponent,
    ViewchildoneComponent,
    ViewchildtwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
