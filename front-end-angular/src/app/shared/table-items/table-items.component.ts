import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ItemModel } from 'src/app/models/item-model';

@Component({
  selector: 'table-items',
  templateUrl: './table-items.component.html',
  styleUrls: ['./table-items.component.scss']
})
export class TableItemsComponent implements OnInit {

  @Input() data: ItemModel[] = [];
  itemsList: ItemModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && this.data.length) {
      this.completTable();
    }
  }

  completTable(){
    this.itemsList = this.data
  }

}