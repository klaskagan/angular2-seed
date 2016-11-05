import {Component} from "@angular/core";
import {CourseService} from './courses.service'

@Component({
  selector: "courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
  providers: [CourseService]

})
export class CoursesComponent {

  title: string = "Courses";
  courses: string[];

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }







}
