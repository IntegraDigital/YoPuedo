import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CourseServiceProvider Provider');
  }
  getCourses(){
    return this.http.get('http://localhost:3000/api/v1/courses')
  }
 // getCourse(id){
 //   return this.http.get('http://localhost:3000/api/v1/courses/' + id)
 // }

}
