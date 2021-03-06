import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemModel } from 'src/app/models/item-model';
import { ItemsService } from 'src/app/services/items-service.service';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit, OnDestroy {

  id: string = '';
  data: ItemModel = {};
  isError: boolean = false;
  messageError: string = '';

  subscribes: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private itemsData: ItemsService) { }

  ngOnInit(): void {
    this.initParams();
    if(this.id) this.getItem();
  }


  ngOnDestroy() {
		this.subscribes.forEach(s => s.unsubscribe());
	}

  initParams(){
		this.subscribes[0] = this.route.params.subscribe(params => this.id = params['id'] ? params['id']  : '');
	}

  getItem(){
    this.subscribes[0] = this.itemsData.getDetailItem(this.id).subscribe(
      result => {
        if(!result) {
          this.isError = true;
          this.messageError = '¡Lo sentimos!, No podemos mostrar este producto en este momento.'
        }

        this.data = result;
        
      },err => {
        this.isError = true
        this.messageError = '¡Lo sentimos!, No podemos mostrar este producto en este momento.'
      }
    )
  }
}