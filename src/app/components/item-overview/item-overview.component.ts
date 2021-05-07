import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {  map, switchMap, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api/api.service';
import { ItemDetails } from 'src/app/services/api/types';

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.scss']
})
export class ItemOverviewComponent  {
  private nameFilter = new BehaviorSubject("");

  // This will do a query every time the name filter changes.
  // Figure out how to merge them?
  public items$: Observable<ItemDetails[]> = this.nameFilter.pipe(
    switchMap(name => {
      return this.apiService.getItems()
      .pipe(map(items => {
        return items.filter(item => {
          return item.name.toLowerCase().startsWith(name.toLowerCase())
        });
      }))
    })
  );

  constructor(private apiService: ApiService) { 
  }

  onKey(event: any) {
    this.nameFilter.next(event.target.value);
  }

}
