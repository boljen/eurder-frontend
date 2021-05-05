import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ItemState, ItemType, ItemTypeData, OrderSummary, RestockUrgency, StockItem, StockRecord, User, UserData } from './types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private url: string = environment.backendUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getItemTypes(): Observable<ItemType[]> {
    return this.http.get<ItemType[]>(`${this.url}/itemtypes`);
  }

  createItemType(itemType: ItemTypeData) {
    return this.http.post<ItemType>(`${this.url}/itemtypes`, itemType);
  }

  updateItemType(id: string, data: ItemTypeData): Observable<ItemType> {
    return this.http.put<ItemType>(`${this.url}/itemtypes/${id}`, data);
  }

  getStock(urgency?: RestockUrgency): Observable<StockRecord[]> {
    const qry = (urgency) ? "?urgency="+  urgency.toString() : "";
    return this.http.get<StockRecord[]>(`${this.url}/stock${qry}`);
  }

  createStockItem(itemTypeId: string, state: string): Observable<StockItem> {
    return this.http.post<StockItem>(`${this.url}/stock/${itemTypeId}/items`, {state});
  } 

  deleteStockItem(itemTypeId: string, itemId: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/stock/${itemTypeId}/items/${itemId}`);
  }

  updateItemState(itemTypeId: string, itemId: string, state: ItemState):Observable<StockItem> {
      return this.http.put<StockItem>(
        `${this.url}/stock/${itemTypeId}/items/${itemId}/state`,
        state.toString(),
      );
  }

  getUsers(): Observable<User[]> {
      return this.http.get<User[]>(`${this.url}/users`);
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(`${this.url}/users/${userId}`);
  }

  createUser(data: UserData): Observable<User> {
    return this.http.post<User>(`${this.url}/users`, data);
  }

  getOrders(): Observable<OrderSummary> {
    return this.http.get<OrderSummary>(`${this.url}/orders`);
  }


//   createOrder() {

//     /*
//       with a copyFrom?
//       -> Without?
//     */


//     /*

//     {
//   "id": "string",
//   "itemGroups": [
//     {
//       "item": {
//         "id": "string",
//         "name": "string",
//         "description": "string",
//         "price": 0
//       },
//       "totalPrice": 0,
//       "backorder": 0,
//       "shippingDate": "2021-05-04"
//     }
//   ],
//   "price": 0
// }
// */
//   }

//   getShipments() {

//     // GET /shipping

//     /*

//     [
//   {
//     "orderId": "string",
//     "address": "string",
//     "itemGroups": [
//       {
//         "item": {
//           "id": "string",
//           "name": "string",
//           "description": "string",
//           "price": 0
//         },
//         "totalPrice": 0,
//         "backorder": 0,
//         "shippingDate": "2021-05-04"
//       }
//     ]
//   }
// ]
// */
//   }
}
