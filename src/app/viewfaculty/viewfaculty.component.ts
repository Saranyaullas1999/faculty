import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewfaculty',
  templateUrl: './viewfaculty.component.html',
  styleUrls: ['./viewfaculty.component.css']
})
export class ViewfacultyComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

 fetchData=()=>{
  this.myapi.viewFaculty().subscribe(
    (data)=>{
      this.facultyData=data
    }
  )
 }

  facultyData:any=[]

  ngOnInit(): void {
  }

}
