import { PhotoModule } from 'src/app/modules/photoModule';
import { photos } from './../../data/photos';
import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  template: `<div class="container">
                <a href="#header" class="arrow-container"><img src="https://i.postimg.cc/rsrdLhr7/Group-19.png" alt="arrow" class="arrow" (click)="scrollToElement($event)"></a>
                <div class="jc-c wrapper">
                  <div class="fx block" *ngFor="let photo of photos">
                      <a [href]="photo.href" data-fancybox="gallery" class="fx img-container">
                        <img [src]="photo.href" [alt]="photo.alt" class="img">
                      </a>
                      <div class="info">
                        <h2 class="date">{{photo.date}}</h2>
                        <p class="text">{{photo.description}}</p>
                      </div>
                    </div>
                    <!-- <div class="fx block">
                      <a href="" data-fancybox="gallery" class="fx img-container">
                        <img [src]="photo.href" [alt]="photo.alt" class="img">
                      </a>
                      <div class="info">
                        <h2 class="date">{{photo.date}}</h2>
                        <p class="text">{{photo.description}}</p>
                      </div>
                    </div> -->
                </div>
              </div>`,
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  photos: PhotoModule[] = photos

  anchor = document.querySelector('#header')

  scrollToElement($event) {
    $event.preventDefault()

    this.anchor.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }
}
