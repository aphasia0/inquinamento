import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: any[];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  constructor() {
    this.images = [];
  }

  ngOnInit() {
    this.images = [{
      previewImageSrc: 'assets/img/1.jpg',
      thumbnailImageSrc: 'assets/img/1_tn.jpg',
      alt: 'Description for Image 8',
      title: 'Title 8'
    }, {
      previewImageSrc: 'assets/img/2.jpg',
      thumbnailImageSrc: 'assets/img/2_tn.jpg',
      alt: 'Description for Image 9',
      title: 'Title 9'
    }];
  }

}
