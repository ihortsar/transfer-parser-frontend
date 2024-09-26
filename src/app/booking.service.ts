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
    if (data?.details.length > 1) {
      this.manageIf2Bookings(data)
    } else {
      let properties = data.details
      properties.airportTransferFromTo = this.airportFromOrTo(properties)
      let booking = new Booking(properties)
      this.bookings.push(booking)
    }
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
