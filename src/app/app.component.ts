import { Component } from '@angular/core';

import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eurder-frontend';

  constructor(private apiService: ApiService) {

    // apiService.getOrders().toPromise().then(console.log);
    // apiService.getAllCustomers().toPromise().then(console.log);

    // apiService.reorder("9345a5b4-af6d-4c6b-88d5-a72d0f279bc7").toPromise().then(console.log);

    /*
    apiService.getCustomerOrders("e55dd32b-b245-4604-815b-45a7fc2e223a").subscribe((records) => {
      console.log(records.totalPriceOfAllOrders);
      records.orders.forEach((record) => {
        console.log(record, record.itemGroups.map((ig) => '' + ig.itemId + ig.name + ig.orderedAmount + '  ' + ig.totalPrice), record.orderId);
      })
    });

    apiService.getItems().toPromise().then(console.log);


    apiService.getItem("4cacbbba-8168-44f9-a040-ba085e5c53e7").toPromise().then((item) => {
      console.log(item);
      apiService.updateItem({
        ...item,
        name: "Iphone XI",
      }).toPromise().then(console.log);
    });
    rrrrrr
    apiService.createItem({
      name: "Iphone X",
      description: "blah apple",
      price: 1990,
      amountOfStock: 5,
    }).toPromise().then(console.log);
    apiService.getAllCustomers().toPromise().then(console.log);

    apiService.getCustomer("a9e6f2bc-5e98-4107-a396-6139f9dd491c").toPromise().then((res) => {
      apiService.updateCustomer({
        ...res,
        firstname: "Fiona",
      }).toPromise().then(console.log);
  
    });


    apiService.createCustomer({
      address: {
        country: "BE",
        houseNumber: "13",
        postalCode: "8500",
        streetName: "Brusselsestraat",
      },
      email: {
        complete: "test@gmail.com",
        domain: "gmail.com",
        localPart: "test",
      },
      firstname: "Chris",
      lastname: "Bol",
      phoneNumber: {
        countryCallingCode: "32",
        number: "123472746",
      }
    }).toPromise().then(console.log);

    */
  }

}

