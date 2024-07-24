import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportAnIssueComponent } from './report-an-issue/report-an-issue.component';
import {ReportPageComponent} from "./report-page/report-page.component";
import {RoadIssuesComponent} from "./road-issues/road-issues.component";
import {MeComponent} from "./me/me.component";
import {ThirdPartiesComponent} from "./third-parties/third-parties.component";
import {PicturesComponent} from "./pictures/pictures.component";
import {MapComponent} from "./map/map.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  { path: 'report', component: ReportAnIssueComponent },
  { path: 'Report', component: ReportPageComponent },
  { path: 'road-issue', component: RoadIssuesComponent },
  { path: 'Me', component: MeComponent },
  { path: '3rd-Prt', component: ThirdPartiesComponent },
  { path: 'Pictures', component: PicturesComponent },
  { path: 'map', component: MapComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent  },
  { path: 'contact', component: ContactComponent  },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
