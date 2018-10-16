import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class YoutubeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello YoutubeProvider Provider');
  }

}
