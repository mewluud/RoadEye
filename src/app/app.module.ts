import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ReportAnIssueComponent } from './report-an-issue/report-an-issue.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { RoadIssuesComponent } from './road-issues/road-issues.component';
import { MeComponent } from './me/me.component';
import { ThirdPartiesComponent } from './third-parties/third-parties.component';
import { PicturesComponent } from './pictures/pictures.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { FileUrlPipe } from './file-url.pipe';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ReportAnIssueComponent,
    ReportPageComponent,
    RoadIssuesComponent,
    MeComponent,
    ThirdPartiesComponent,
    PicturesComponent,
    MapComponent,
    HowItWorksComponent,
    FileUrlPipe,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LeafletModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
