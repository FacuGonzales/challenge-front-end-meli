import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewDetail(id){
    this.router.navigate([`/item/${id}`])
  }
}
