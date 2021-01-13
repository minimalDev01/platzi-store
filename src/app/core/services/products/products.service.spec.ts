import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ProductsService } from '@core/services/products/products.service';
import { environment } from '@environments/environment';

fdescribe('ProductsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('tests for getAllProducts', () => {
    it('should return products', () => {
      // Arrange
      const expectData = [
        {
          id: '1',
          title: 'Testing 1',
          price: 10,
          description: 'Testing products',
          image: 'img/img.png',
        },
        {
          id: '2',
          title: 'Testing 2',
          price: 10,
          description: 'Testing products',
          image: 'img/img.png',
        },
      ];
      // Act
      let dataError, dataResponse;
      service.getAllProducts().subscribe(
        (response) => {
          dataResponse = response;
        },
        (error) => {
          dataError = error;
        }
      );
      const req = httpTestingController.expectOne(
        `${environment.url_api}/products/`
      );
      req.flush(expectData);

      // Asort
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});
