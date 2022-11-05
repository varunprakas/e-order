import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  setServiceData:any
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('/assets/data.json');
  }
  setDataInMemory(data){
    this.setServiceData = data
  }
  getDataInMemory(){
    return this.setServiceData;
  }
}
