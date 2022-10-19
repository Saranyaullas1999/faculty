import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewfaculty',
  templateUrl: './viewfaculty.component.html',
  styleUrls: ['./viewfaculty.component.css']
})
export class ViewfacultyComponent implements OnInit {

  constructor() { }


  facultyData=[{"id":1,"name":"Anisha","department":"ComputerScience & Engineering","designation":"Assistant Professor","qualification":"MCA"},{"id":2,"name":"Leena","department":"Civil Engineering","designation":"Professor","qualification":"Civil Engineering"},{"id":3,"name":"Nitha","department":"Electronics & Communication Engineering","designation":"Professor","qualification":"EEE"},{"id":4,"name":"Sreekumar","department":"ComputerScience & Engineering","designation":"Associate Professor","qualification":"MCA"}]

  ngOnInit(): void {
  }

}
