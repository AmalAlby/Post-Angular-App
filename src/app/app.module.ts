import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpostComponent } from './addpost/addpost.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

const myroute:Routes=[
  {
    path:"",
    component:AddpostComponent
  },
  {
    path:"view",
    component:ViewpostComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddpostComponent,
    ViewpostComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
