import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { StockUrgency } from 'src/app/services/api/types';

@Component({
  selector: 'app-stock-indicator',
  templateUrl: './stock-indicator.component.html',
  styleUrls: ['./stock-indicator.component.scss']
})
export class StockIndicatorComponent implements OnInit, OnChanges {

  @Input() public urgency: StockUrgency = StockUrgency.STOCK_HIGH;

  public text: string = '';
  public cssClass: 'red' | 'orange' | 'green' = 'red';
  constructor() { }

  ngOnInit(): void {
    this.initComponent();
  }

  ngOnChanges(): void {
    this.initComponent();
  }

  initComponent() {
    switch (this.urgency) {
      case StockUrgency.STOCK_HIGH:
        this.text = "High";
        this.cssClass = 'green';
        break;
      case StockUrgency.STOCK_MEDIUM:
        this.text = "Medium";
        this.cssClass = 'orange';
        break;
      case StockUrgency.STOCK_LOW:
        this.text = "Low";
        this.cssClass = 'red';
        break;
    }
  }

}
