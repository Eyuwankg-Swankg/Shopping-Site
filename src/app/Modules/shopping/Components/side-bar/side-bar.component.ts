import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  @Output() filterData = new EventEmitter<string>();
  minimum: string = '';
  maximum: string = '';
  rating: string = '';
  constructor() {}

  ngOnInit(): void {}
  handleSearch(): void {
    this.filterData.emit(
      JSON.stringify({
        min: this.minimum == '' ? 0 : parseInt(this.minimum),
        max: this.maximum == '' ? 10000 : parseInt(this.minimum),
        rating: this.rating == '' ? 0.0 : parseFloat(this.rating),
      })
    );
  }
}
