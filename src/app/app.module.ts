import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewfacultyComponent } from './viewfaculty/viewfaculty.component';
import{HttpClientModule} from '@angular/common/http'

const appRoutes:Routes=[
  {
    path:"",component:AddfacultyComponent
  },
  {
    path:"view",component:ViewfacultyComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddfacultyComponent,
    ViewfacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
