import { HttpClient } from 'selenium-webdriver/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntradaComponent } from './entrada/entrada.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EntradaComponent,
    FileSelectDirective,
    FileDropDirective,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    ButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
