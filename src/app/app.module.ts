import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AngularSvgIconModule } from "angular-svg-icon";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlugifyPipe } from './pipes/slugify.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SlugifyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [
    SlugifyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
