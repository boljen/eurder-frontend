import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CreateOrderRequest, CreateOrderResponse, Customer, CustomerData, CustomerDetails, CustomerOrderReport, ItemData, ItemDetails, OrderDetails, StockUrgency } from './types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private url: string = environment.backendUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.url}/customers`);
  }

  createCustomer(data: CustomerData): Observable<CustomerDetails> {
    return this.http.post<CustomerDetails>(`${this.url}/customers`, data);
  }

  getCustomer(id: string): Observable<CustomerDetails> {
    return this.http.get<CustomerDetails>(`${this.url}/customers/${id}`);
  }

  updateCustomer(data: CustomerDetails): Observable<CustomerDetails> {
    return this.http.put<CustomerDetails>(`${this.url}/customers/${data.id}`, data);
  }

  getItems(urgency?: StockUrgency): Observable<ItemDetails[]> {
    let params = new HttpParams();
    if (urgency !== undefined) {
      params = params.append("stockUrgency", StockUrgency[urgency]);
    }
    return this.http.get<ItemDetails[]>(`${this.url}/items`, { params })
  }

  getItem(id: string): Observable<ItemDetails> {
    return this.http.get<ItemDetails>(`${this.url}/items/${id}`);
  }

  createItem(data: ItemData): Observable<ItemDetails> {
    return this.http.post<ItemDetails>(`${this.url}/items`, data);
  }

  updateItem(data: ItemDetails): Observable<ItemDetails> {
    return this.http.put<ItemDetails>(`${this.url}/items/${data.id}`, data);
  }  

  getOrders(shippableToday?: boolean): Observable<OrderDetails[]> {
    let params = new HttpParams();
    if (shippableToday !== undefined) {
      params = params.append("shippableToday", shippableToday.toString());
    }
    return this.http.get<OrderDetails[]>(`${this.url}/orders`, { params });
  }

  createOrder(data: CreateOrderRequest): Observable<CreateOrderResponse> {
    return this.http.post<CreateOrderResponse>(`${this.url}/orders`, data);
  }

  reorder(orderId: string): Observable<CreateOrderResponse> {
    return this.http.post<CreateOrderResponse>(`${this.url}/orders/${orderId}/reorder`, null);
  }

  getCustomerOrders(customerId: string): Observable<CustomerOrderReport> {
    return this.http.get<CustomerOrderReport>(`${this.url}/orders/customers/${customerId}`);
  }
}
