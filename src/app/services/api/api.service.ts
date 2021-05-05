import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';


import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ItemType } from './types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getItemTypes(): Observable<ItemType> {
    return this.http.get(environment.backendUrl + '/itemtypes')
      .pipe(tap(console.log));
  }

//   createItemType() {
//     /*
//     {
//       "name": "string",
//       "description": "string",
//       "price": 0,
//       "stock": 0
//     }
//     */
//     // POST /itemtypes
//   }

//   updateItemType(itemTypeId: string) {
//     /*
//     {
//       "name": "string",
//       "description": "string",
//       "price": 0,
//       "stock": 0
//     }
//     */
//     // PUT /itemtypes/{itemTypeId}
//   }

//   getItemStock() {
//     // GET /stock
//   }

//   createItem(itemTypeId: string) {
//     // POST ​/stock​/{itemTypeId}​/items
//   }

//   deleteItem(itemTypeId: string, itemId: string) {
//     // DELETE /stock/{itemTypeId}/items/{itemId}
//   }

//   updateItemState(itemTypeId: string, itemId: string) {
//       // PUT /stock/{itemTypeId}/items/{itemId}/state
//   }

//   getUsers() {
//     // GET /users
//     /* [
//   {
//     "id": "string",
//     "firstName": "string",
//     "lastName": "string",
//     "emailAddress": "string",
//     "phoneNumber": "string",
//     "address": {
//       "country": "string",
//       "city": "string",
//       "postalCode": "string",
//       "street": "string",
//       "houseNumber": "string"
//     }
//   }
// ]*/
//   }

//   getUser(userId: string) {
//     // GET /users/{userId}
//     /*
//     UserDTO

//     {
//       "id": "string",
//       "firstName": "string",
//       "lastName": "string",
//       "emailAddress": "string",
//       "phoneNumber": "string",
//       "address": {
//         "country": "string",
//         "city": "string",
//         "postalCode": "string",
//         "street": "string",
//         "houseNumber": "string"
//       }
//     }
//     */
//   }

//   createUser() {
//     /*

//     CREATEUserDTO
//     {
//       "firstName": "string",
//       "lastName": "string",
//       "emailAddress": "string",
//       "phoneNumber": "string"
//       "address": {
//         "country": "string",
//         "city": "string",
//         "postalCode": "string",
//         "street": "string",
//         "houseNumber": "string"
//       },
//     }
//     */
//   }


//   getOrders() {
//     // GET /orders

//     /*
//     {
//   "totalPrice": 0,
//   "orders": [
//     {
//       "id": "string",
//       "totalPrice": 0,
//       "itemGroups": [
//         {
//           "name": "string",
//           "orderedAmount": 0,
//           "totalPrice": 0
//         }
//       ]
//     }
//   ]
// }
// */
//   }

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
