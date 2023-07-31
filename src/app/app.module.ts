import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import{import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './component/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
