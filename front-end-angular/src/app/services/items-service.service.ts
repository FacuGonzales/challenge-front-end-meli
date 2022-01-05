import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemModel } from '../models/item-model';

@Injectable({
  providedIn: 'root'
})

export class ItemsService {
  
  private api: string = 'http://localhost:8080/api/';

  constructor( private _http: HttpClient ) {}

  getListItems(search: string){
    return this._http.get<ItemModel[]>(this.api + 'items/' + search);
  }

  getDetailItem(id: string){
    return this._http.get<ItemModel>(this.api + 'item/' + id);
  }
}
