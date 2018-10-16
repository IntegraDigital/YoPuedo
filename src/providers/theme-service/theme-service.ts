import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ThemeServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ThemeServiceProvider Provider');
  }
  getTheme(){
    return this.http.get('http://localhost:3000/api/v1/themes/')
  }
  getThemes(id){
    return this.http.get('http://localhost:3000/api/v1/themes/' + id)
  }
}
