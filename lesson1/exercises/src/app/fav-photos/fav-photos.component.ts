import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Cool Photos';
  image1 = 'https://www.thesun.co.uk/wp-content/uploads/2018/06/NINTCHDBPICT0004103949411.jpg';
  image2 = 'https://www.soundtrack.net/img/album/5348.jpg';
  image3 = 'https://i.pinimg.com/originals/4e/41/7d/4e417daee96a2bb480fe7d112a5722bf.jpg';

  constructor() { }

  ngOnInit() {
  }

}