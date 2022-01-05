import { Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemModel } from 'src/app/models/item-model';
import { ItemsService } from 'src/app/services/items-service.service';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit, OnDestroy {

  @Input() idItem: string;
  
  item: ItemModel = {};
  error: boolean = false;
  
  subscribes: Subscription[] = [];


  constructor(private itemsData: ItemsService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
		this.subscribes.forEach(s => s.unsubscribe());
	}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.idItem && this.idItem !== '') {
      this.getDetails();
    }
  }

}
