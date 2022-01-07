import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() searchValue = new EventEmitter<string>()
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

  navigateHome(){
    this.router.navigate([`/`])
  }

  searchItems(){
    let value = this.searchForm.value.nameItem;
    this.router.navigate([`/items/${value.toLowerCase()}`])
  }
}
