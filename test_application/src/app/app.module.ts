import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColouredTableComponent } from './coloured-table/coloured-table.component';
import { ColouredRowComponent } from './coloured-table/coloured-row/coloured-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ColouredTableComponent,
    ColouredRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
