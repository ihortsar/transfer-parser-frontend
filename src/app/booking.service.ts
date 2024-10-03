import { Injectable } from '@angular/core';
import { Booking } from './classes/booking.class';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  pdfSource: string = ''
  bookings: {}[] = []


  constructor() { }


  createTransfer(data: any) {
    data.forEach((booking: any) => {
      if (booking.details.length > 1) {
        this.manageIf2Bookings(booking)
      } else {
        let properties = booking.details
        properties.airportTransferFromTo = this.airportFromOrTo(properties)
        let newBooking = new Booking(properties)
        this.bookings.push(newBooking)
      }
    })
  }


  manageIf2Bookings(data: any) {
    const [properties1, properties2] = data.details;
    const sharedProps = ['mainContact', 'phone', 'contactPerson', 'phoneArranger', 'email'];
    sharedProps.forEach(prop => properties2[prop] = properties1[prop]);
    [properties1, properties2].forEach(properties => {
      properties.airportTransferFromTo = this.airportFromOrTo(properties);
    });
    this.bookings.push(new Booking(properties1), new Booking(properties2));
  }



  airportFromOrTo(details: any) {

    if (details.flightArrivalTime !== '') {
      details.airportTransferFromTo = 'from'
    } else {
      details.airportTransferFromTo = 'to'
    }
    return details.airportTransferFromTo
  }



}
