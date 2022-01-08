import { formatCurrency } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  @Input() price: number = 0;
  @Input() decimals: number = 0;
  @Input() prefix: string = 'ARS';
  @Input() free_shipping: boolean = false;

  pricesFormated: string[];

  currency_ids = [
    {id: 'ARS', prefix: '$'},
    {id: 'USD', prefix: 'u$s'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.price && this.price) {
      this.formatPrice();
    }
  }

  formatPrice(){
    let _formatPrice: string = this.price.toFixed(this.decimals);
    this.pricesFormated = _formatPrice.split('.');
    let regexp: RegExp = /(\d+)(\d{3})/;

    this.pricesFormated[1] === '00' && this.pricesFormated.pop()

    while (regexp.test(this.pricesFormated[0]))
      this.pricesFormated[0] = this.pricesFormated[0].replace(regexp, '$1' + '.' + '$2');

    let currency = this.currency_ids.filter(c=> c.id === this.prefix)
    this.pricesFormated.unshift(currency[0].prefix)

    return this.pricesFormated;
  }
}
