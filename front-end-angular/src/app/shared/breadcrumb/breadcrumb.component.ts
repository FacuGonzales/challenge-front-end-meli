import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Breadcrumb } from '../../models/breadcrumb-model';
import { BreadcrumbDataService } from '../../services/breadcrumb-data.service';
@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(private readonly breadcrumbService: BreadcrumbDataService) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }


}
