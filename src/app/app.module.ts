import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    ProfileComponent,
    AboutComponent,
    LoginComponent,
    MapComponent,
    PostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NotificationComponent,
    ProfileComponent,
    AboutComponent,
    LoginComponent,
    MapComponent,
    PostComponent
  ]

})
export class AppModule { }
