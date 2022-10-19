import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {

  constructor(private myapi:ApiService) { }
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
    this.myapi.addFaculty(data).subscribe(
      (response)=>{
        console.log(response)
      }
    )
    this.name=""
    this.department=""
    this.designation=""
    this.qualification=""
  }

  ngOnInit(): void {
  }

}
