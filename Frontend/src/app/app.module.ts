import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryService } from 'app/gallery/services/gallery.service';
import { CommonService } from 'app/_service/config/common.service';
import { ConfigService } from 'app/_service/config/config.service';
import { UserService } from 'app/_service/content-services/user.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { RoutingModule } from 'app/app.routing';
import { RouterModule }   from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [GalleryService,CommonService,ConfigService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
