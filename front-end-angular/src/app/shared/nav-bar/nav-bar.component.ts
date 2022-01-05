import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() searchValue = new EventEmitter<string>()
  searchForm: FormGroup;

  constructor( private fb: FormBuilder ) {}

  ngOnInit(): void {
    this.formInit();
  }

  formInit(){
    this.searchForm = this.fb.group({
      nameItem: '',
    })
  }

  searchItems(){
    this.searchValue.emit(this.searchForm.value.nameItem);
  }

}
