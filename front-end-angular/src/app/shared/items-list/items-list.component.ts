import { Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ItemsService } from 'src/app/services/items-service.service';
import { Subscription } from 'rxjs';
import { ItemModel } from 'src/app/models/item-model';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit, OnDestroy {

  @Input() searchValue: string = '';
  
  itemsList: ItemModel[] = [];
  error: boolean = false;

  subscribes: Subscription[] = [];


  constructor(private itemsData: ItemsService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
		this.subscribes.forEach(s => s.unsubscribe());
	}

}
