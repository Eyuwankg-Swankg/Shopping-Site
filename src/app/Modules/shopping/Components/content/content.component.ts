import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input() store: any;
  @Output() increaseCount = new EventEmitter<string>();
  addCart: any = faCartPlus;
  carasouel: Array<string> = [
    '/assets/images/1.jpg',
    '/assets/images/2.jpg',
    '/assets/images/3..jpg',
  ];
  classNames: any = ['carousel-item active', 'carousel-item', 'carousel-item'];
  carouselIndex: number = 0;
  constructor() {}

  ngOnInit(): void {}
  previous() {}
  next() {}
  increaseCart() {
    this.increaseCount.emit('');
  }
}
