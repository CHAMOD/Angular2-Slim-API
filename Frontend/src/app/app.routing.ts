import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { GalleryComponent } from 'app/gallery/gallery.component';
import { FavoriteComponent } from 'app/favorite/favorite.component';


const routes: Routes =[

    { path: 'gallery',   component: GalleryComponent },
    { path: 'favorite',   component: FavoriteComponent },
    { path: '', redirectTo: 'gallery', pathMatch: 'full' },
]; 


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class RoutingModule { }
