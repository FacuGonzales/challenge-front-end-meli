import { Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ItemsService } from 'src/app/services/items-service.service';
import { Subscription } from 'rxjs';
import { ItemModel } from 'src/app/models/item-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit,OnDestroy {

  params: string = '';
  itemsList: ItemModel[] = [];
  error: boolean = false;

  subscribes: Subscription[] = [];


  constructor(private router: Router,
              private route: ActivatedRoute,
              private itemsData: ItemsService) { }

  ngOnInit(): void {
    this.initParams();
    if(this.params) this.getItems();
  }


  ngOnDestroy() {
		this.subscribes.forEach(s => s.unsubscribe());
	}

  initParams(){
		this.subscribes[0] = this.route.params.subscribe(params => this.params = params['search'] ? params['search']  : '');
	}

  getItems(){
    this.subscribes[0] = this.itemsData.getListItems(this.params).subscribe(
      result => {
        if(!result) this.error = true;

        this.itemsList = result;
      },err => console.error(err)
    )
  }

  newValueSearch(value){
    this.params = value ? value : '';

    this.getItems();
  }
}