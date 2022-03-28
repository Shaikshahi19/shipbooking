import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingdetailsService } from 'src/app/services/bookingdetails.service';
@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrls: ['./bookingpage.component.css']
})
export class BookingpageComponent implements OnInit {

  public bookingpageForm! :FormGroup;
  constructor(private formBuilder:FormBuilder, private param:ActivatedRoute, private service:BookingdetailsService,private http:HttpClient,private router:Router) { }
  getbookingId:any;
  bookingData:any;
  ngOnInit(): void {
    this.bookingpageForm =this.formBuilder.group({
     fullname:[''],
     mobile:[''],
     date:[''],
     passengers:[''],
     destination:[''],
     payment:[''] 
    })
    this.getbookingId = this.param.snapshot.paramMap.get('id');
    console.log(this.getbookingId,'getbooking');
    if(this.getbookingId)
   {
      this.bookingData =  this.service.bookingdetails.filter((value)=>{
          return value.id == this.getbookingId;
        });
        console.log(this.bookingData,'bookingData>>');
    
   } 

  }
  BookNow(){
    this.http.post<any>("http://localhost:3000/posts", this.bookingpageForm.value)
    .subscribe(res=>{
      alert("Bokking Done Sucessfully");
      this.bookingpageForm.reset();
      this.router.navigate(['booknow']);
    })
  }

}
