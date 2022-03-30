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
  constructor() {}
  
  ngOnInit(): void {}
  increaseCart() {
    this.increaseCount.emit('');
  }
}
