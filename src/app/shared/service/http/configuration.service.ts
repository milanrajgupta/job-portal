import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  getApiUrl() {
    throw new Error('Method not implemented.');
  }

  public ApiUrl = 'https://ecommerceapi.koiv.in/api/'; 

  /** Endpoints Url's **/
  public readonly getBrand = "ProductBrand";

  constructor() { }
}
