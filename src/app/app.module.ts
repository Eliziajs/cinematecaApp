import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { FilmeModule } from './filme/filme.module';
import { FilmeService } from './filme.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    UserModule,
    FilmeModule
  ],
  providers: [
    FilmeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
