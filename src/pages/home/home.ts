import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CourseServiceProvider} from '../../providers/course-service/course-service';
import { ThemePage } from '../theme/theme';

 @Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  courses: any;

  constructor(public navCtrl: NavController,  
    private courseService: CourseServiceProvider) {
    this.obtenerCursos();
  }

  obtenerCursos(){
    this.courseService.getCourses().subscribe((data) => {
        this.courses = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      });
  }

  llamar(id:number){
    this.navCtrl.push(ThemePage, id);
  }

}
  