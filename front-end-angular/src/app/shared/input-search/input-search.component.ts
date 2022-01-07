import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {

  searchForm: FormGroup;

  constructor( private fb: FormBuilder, private router: Router ) {}

  ngOnInit(): void {
    this.formInit();
  }

  formInit(){
    this.searchForm = this.fb.group({
      nameItem: '',
    })
  }

  searchItems(){
    let value = this.searchForm.value.nameItem;
    this.router.navigate([`/items/${value.toLowerCase()}`])
  }
}