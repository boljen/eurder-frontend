import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { CreateOrderRequest, CustomerDetails, ItemData, ItemDetails, StockUrgency } from './types';
import { HttpClientModule } from '@angular/common/http';

describe('ApiService', () => {
  
  describe('Unit Tests', () => {
    let service: ApiService;
    let injector: TestBed;
    let httpMock: HttpTestingController;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ApiService]
      });
      injector = getTestBed();
      service = injector.inject(ApiService);
      httpMock = injector.inject(HttpTestingController);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  
    it('should return all customers', (done) => {
      service.getAllCustomers().subscribe(done);
      const req = httpMock.expectOne(environment.backendUrl + '/customers');
      expect(req.request.method).toEqual('GET');
      req.flush([]);
    });

    it('should create a customer', (done) => {
      service.createCustomer(({} as any)).subscribe(done);
      const req = httpMock.expectOne(environment.backendUrl + '/customers');
      expect(req.request.method).toEqual('POST');
      req.flush({});
    });

    it('should get a customer by id', (done) => {
      service.getCustomer("customer-id").subscribe(done);
      const req = httpMock.expectOne(environment.backendUrl + '/customers/customer-id');
      expect(req.request.method).toEqual('GET');
      req.flush({});
    });

    it('should update a customer', (done) => {
      const data = { id: "customer-to-update" } as CustomerDetails;
      service.updateCustomer(data).subscribe(done);
      const req = httpMock.expectOne(environment.backendUrl + '/customers/customer-to-update');
      expect(req.request.method).toEqual('PUT');
      expect(req.request.body).toEqual(data);
      req.flush({});
    });

    it('should get items without urgency', (done) => {
      service.getItems().subscribe(done);
      const req = httpMock.expectOne(environment.backendUrl + '/items');
      expect(req.request.method).toEqual('GET');
      req.flush({});
    });

    it('should get items with specific urgency', (done) => {
      service.getItems(StockUrgency.STOCK_HIGH).subscribe(done);
      const req = httpMock.expectOne(environment.backendUrl + '/items?stockUrgency=STOCK_HIGH');
      expect(req.request.method).toEqual('GET');
      req.flush({});
    });

    it('should get an item by id', (done) => {
      service.getItem("item-id").subscribe(done);
      const req = httpMock.expectOne(environment.backendUrl + '/items/item-id');
      expect(req.request.method).toEqual('GET');
      req.flush({});
    });

    it('should create an item', (done) => {
      const data = {} as ItemData;
      service.createItem(data).subscribe(done);
      const req = httpMock.expectOne(environment.backendUrl + '/items');
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(data);
      req.flush({});
    });

    it('should update an item', (done) => {
      const data = {id:"item-to-update"} as ItemDetails;
      service.updateItem(data).subscribe(done);
      const req = httpMock.expectOne(environment.backendUrl + '/items/item-to-update');
      expect(req.request.method).toEqual('PUT');
      expect(req.request.body).toEqual(data);
      req.flush({});
    });

    it('should get all orders', (done) => {
      service.getOrders().subscribe(done);
      const req = httpMock.expectOne(environment.backendUrl + '/orders');
      expect(req.request.method).toEqual('GET');
      req.flush({});
    });

    it('should get orders not shippable today', (done) => {
      service.getOrders(false).subscribe(done);
      const req = httpMock.expectOne(environment.backendUrl + '/orders?shippableToday=false');
      expect(req.request.method).toEqual('GET');
      req.flush({});
    });

    it('should create an order', (done) => {
      const data = {} as CreateOrderRequest;
      service.createOrder(data).subscribe(done);
      const req = httpMock.expectOne(environment.backendUrl + '/orders');
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(data);
      req.flush({});
    });

    it('should reorder', (done) => {
      service.reorder("order-to-reorder").subscribe(done);
      const req = httpMock.expectOne(environment.backendUrl + '/orders/order-to-reorder/reorder');
      expect(req.request.method).toEqual('POST');
      req.flush({});
    });

    it('should get customer orders', (done) => {
      service.getCustomerOrders("customer-id").subscribe(done);
      const req = httpMock.expectOne(environment.backendUrl + '/orders/customers/customer-id');
      expect(req.request.method).toEqual('GET');
      req.flush({});
    });
  });

  describe('Integration Tests', () => {
    let service: ApiService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [ApiService]
      });
      const injector = getTestBed();
      service = injector.inject(ApiService);

    });

    it('should get all customers', (done) => {
      service.getAllCustomers().subscribe((result) => {
        expect(result.length).toBeGreaterThan(0);
        done();
      });
    });

    
    it('should get all orders', (done) => {
      service.getOrders().subscribe((result) => {
        expect(result.length).toBeGreaterThan(0);
        done();
      });
    });
  
  });

});
