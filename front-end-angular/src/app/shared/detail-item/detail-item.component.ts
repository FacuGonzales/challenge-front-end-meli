import { Component, Input, OnInit } from '@angular/core';
import { ItemModel } from 'src/app/models/item-model';

@Component({
  selector: 'detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {

  @Input() data: ItemModel;
  
  constructor() { }

  ngOnInit(): void {
  }

}
