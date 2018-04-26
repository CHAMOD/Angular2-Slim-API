import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assassin-Image-Gallery';
  images;
  constructor(){
      this.images = [
        {
          "url":"assets/1.jpg",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
        },
        {
          "url":"assets/2.jpg",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
        },
        {
          "url":"assets/3.jpg",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
        },
        {
          "url":"assets/4.jpg",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
        },
        {
          "url":"assets/5.jpg",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
        }
      ];
   }
}
