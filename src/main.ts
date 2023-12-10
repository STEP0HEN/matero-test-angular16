import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MtxSelectModule } from '@ng-matero/extensions/select';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MtxGridModule } from '@ng-matero/extensions/grid';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, MtxGridModule, MtxSelectModule, MatCheckboxModule, MatButtonModule, MatRadioModule, CommonModule, FormsModule),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
