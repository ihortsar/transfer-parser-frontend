import { Injectable } from '@angular/core';
import { Booking } from './classes/booking.class';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  pdfSource: string = ''

  bookings: {}[] = []
  serviceClasses = {
    "Private Standard Car": "PE",
    "VIP Service": "VIP",
    "Sport Utility Vehicle": "SUV",
    "Luxury Car": "LX",
    "Shuttle": "SH",
    "Minibus": "MB",
    "Extra Large": "XL",
    "Economy Class": "EC",
    "Business Class": "BC",
    "Transfer Service": "TR"
  }

  constructor() { }


  createTransfer(data: any) {
    if (data?.details1) {
      this.manageIf2Bookings(data)
    } else {
      let properties = data.details.properties
      properties.serviceClass = this.checkServiceClass(properties.serviceClass)
      properties.airportTransferFromTo = this.airportFromOrTo(properties)
      let booking = new Booking(properties)
      this.bookings.push(booking)
    }
  }


  manageIf2Bookings(data: any) {
    const properties1 = data.details1.properties;
    const properties2 = data.details2.properties;
    properties2.mainContact = properties1.mainContact
    properties2.phone = properties1.phone
    properties2.contactPerson = properties1.contactPerson
    properties2.phoneArranger = properties1.phoneArranger
    properties2.email = properties1.email
    properties1.airportTransferFromTo = this.airportFromOrTo(properties1)
    properties2.airportTransferFromTo = this.airportFromOrTo(properties2)
    properties1.serviceClass = this.checkServiceClass(properties1.serviceClass)
    properties2.serviceClass = this.checkServiceClass(properties2.serviceClass)
    let booking1 = new Booking(properties1)
    let booking2 = new Booking(properties2)
    this.bookings.push(booking1, booking2);
  }


  airportFromOrTo(details: any) {
    if (details.flightArrivalTime !== '') {
      details.airportTransferFromTo = 'from'
    } else {
      details.airportTransferFromTo = 'to'
    }
    return details.airportTransferFromTo
  }


  checkServiceClass(key: keyof typeof this.serviceClasses) {
    return this.serviceClasses[key] || '';
  }
}
