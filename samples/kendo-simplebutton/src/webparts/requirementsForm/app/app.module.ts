import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// Import ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
   declarations: [
       AppComponent
   ],
   imports: [
       BrowserModule,
       FormsModule,
       HttpModule,

       // And register it
       ButtonsModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
