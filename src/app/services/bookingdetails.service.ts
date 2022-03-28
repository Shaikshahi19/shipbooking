
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingdetailsService {

  constructor() { }


bookingdetails = [
  {
    id:1,
    cruiseName:"Goa-Lakshadweep",
    cruiseDetails:"3nights",
    cruisePrice:30000,
    cruiseImg: "https://thumbs.dreamstime.com/b/cruise-ship-3728559.jpg"
  },


  {
    id:2,
    cruiseName:"Kochi-SriLanka",
    cruiseDetails:"1nights",
    cruisePrice:29000,
    cruiseImg: "http://cdn.cnn.com/cnnnext/dam/assets/220212144422-01-wonder-of-the-seas-royal-caribbean.jpg"
  },


  {
  id:3,
  cruiseName:"Malabar Coast-Sri Lanka",
  cruiseDetails:"5nights",
  cruisePrice:81600,
  cruiseImg: "https://media.istockphoto.com/photos/cruise-ship-with-wonderful-tropical-beach-picture-id480197161?k=20&m=480197161&s=612x612&w=0&h=DH2CPp4VqBNXsdFIODl3-kyOLLfsqsHWnFtscmKS2cI="
  },


  {
  id:4,
  cruiseName:"Chennai-Galle",
  cruiseDetails:"2nights",
  cruisePrice:32540,
  cruiseImg: "https://besthqwallpapers.com/Uploads/12-5-2017/15637/thumb-ms-aidaprima-cruise-ships-germany-pier-hamburg.jpg"
  },


  {
  id:5,
  cruiseName:"Chennai-Sri Lanka",
  cruiseDetails:"3nights",
  cruisePrice:37666,
  cruiseImg: "https://media.istockphoto.com/photos/dining-room-buffet-aboard-the-luxury-abstract-cruise-ship-picture-id1196385250?k=20&m=1196385250&s=612x612&w=0&h=cUp0NzkGnqi6syoEUxAZ7q-cNF-s0lcjuOc-xGxAtW4="
  },

  {
  id:6,
  cruiseName:"Mumbai-Goa",
  cruiseDetails:"7nights",
  cruisePrice:72880,
  cruiseImg: "https://i.ytimg.com/vi/U3G8q5wNBwA/maxresdefault.jpg"
  },

]

}


