import { Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ItemsService } from 'src/app/services/items-service.service';
import { Subscription } from 'rxjs';
import { ItemModel } from 'src/app/models/item-model';
import { Router } from '@angular/router';

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


  constructor(private router: Router,
              private itemsData: ItemsService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
		this.subscribes.forEach(s => s.unsubscribe());
	}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.searchValue && this.searchValue !== '') {
      this.getItems();
    }
  }

  getItems(){
    this.subscribes[0] = this.itemsData.getListItems(this.searchValue).subscribe(
      result => {
        if(!result) this.error = true;

        this.itemsList = result;
      },err => console.error(err)
    )
  }

  viewDetail(id){
    this.router.navigate([`/item/${id}`])
  }
}
