import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {

  constructor() { }
  name=""
  department=""
  designation=""
  qualification=""

  readValue=()=>{
    let data={
      "name":this.name,
      "department":this.department,
      "designation":this.designation,
      "qualification":this.qualification
    }
    console.log(data)
    alert("Successfully Added")
    this.name=""
    this.department=""
    this.designation=""
    this.qualification=""
  }

  ngOnInit(): void {
  }

}
