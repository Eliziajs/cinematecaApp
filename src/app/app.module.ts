import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { UserModule } from './modules/user.module';
import { FilmeModule } from './modules/filme.module';
import { FilmeService } from './services/filme.service';
import { TokenInterceptor } from './token.interceptor';
import { FormsModule } from '@angular/forms';
import { DiretorFormComponent } from './components/diretor-form/diretor-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiretorFormComponent,
     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    UserModule,
    FilmeModule,
   
  ],
  providers: [
    FilmeService,
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
