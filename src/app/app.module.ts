import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { LayoutsModule } from "./layouts/layouts.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    // MatSidenavContainer,
    // MatSidenavModule,
    MatButtonModule,
    BrowserModule,
    LayoutsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
