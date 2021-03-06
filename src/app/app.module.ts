import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { DataHandlerComponent } from './views/data-handler/data-handler.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    DataHandlerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
