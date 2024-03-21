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
import { SignaloneComponent } from './signalone/signalone.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MethodsComponent } from './methods/methods.component';
@NgModule({
  declarations: [
    AppComponent,
    ChidappComponent,
    ComponentoneComponent,
    ComponenttwoComponent,
    ComponentthreeComponent,
    ViewchildoneComponent,
    ViewchildtwoComponent,
    SignaloneComponent,
    ReactiveformComponent,
    TemplateformComponent,
    MethodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
