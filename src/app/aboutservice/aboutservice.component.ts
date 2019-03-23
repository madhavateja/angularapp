import { CoursesService } from './../courses.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutservice',
  templateUrl: './aboutservice.component.html',
  styleUrls: ['./aboutservice.component.css']
})
export class AboutserviceComponent implements OnInit {
  courses;

  constructor(services:CoursesService) { }

  ngOnInit() {

  }

}
