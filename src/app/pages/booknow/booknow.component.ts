import { Component, OnInit } from '@angular/core';
import { BookingdetailsService } from 'src/app/services/bookingdetails.service';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {

  constructor(private service:BookingdetailsService) { }
  bookingData:any;
  ngOnInit(): void {
    this.bookingData = this.service.bookingdetails;
  }

}
