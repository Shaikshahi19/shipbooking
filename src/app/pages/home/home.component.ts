import { Component, OnInit } from '@angular/core';
import { BookingdetailsService } from 'src/app/services/bookingdetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:BookingdetailsService) { }
  cruiseData:any;
  ngOnInit(): void {
    this.cruiseData = this.service.bookingdetails;
  }

}
