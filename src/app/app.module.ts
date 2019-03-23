import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component,ElementRef} from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { myname } from './tutorial';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule,Routes} from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CustomPipe } from './custom.pipe';
import { AboutserviceComponent } from './aboutservice/aboutservice.component';


const Router:Routes=[

  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'register',component:RegisterComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'login',component:LoginComponent}
  
  
  

  


]

@NgModule({
  declarations: [
    AppComponent,
    myname,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    PagenotfoundComponent,
    CustomPipe,
    AboutserviceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(Router)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
