import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  params: string = '';
  id: string = '';
  subscribes: Subscription[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.initParams();
  }

  ngOnDestroy() {
		this.subscribes.forEach(s => s.unsubscribe());
	}

  initParams(){
		this.subscribes[0] = this.route.params.subscribe(params => this.params = params['search'] ? params['search']  : '');
    this.subscribes[1] = this.route.params.subscribe(params => this.id = params['id'] ? params['id']  : '');
	}

  searchValue(value:string){
    this.router.navigate([`/items/${value.toLowerCase()}`])
  }
}
