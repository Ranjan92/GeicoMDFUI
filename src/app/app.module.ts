import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageflowDiagramComponent } from './pageflow-diagram/pageflow-diagram.component';
import {HttpClientModule} from '@angular/common/http';
import { PageflowServiceService } from './pageflow-service.service';
import {FormsModule} from '@angular/forms';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { JobDetailsComponent } from './job-details/job-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PageflowDiagramComponent,
    RootNavComponent,
    LandingPageComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [PageflowServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
