import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingService } from '../booking.service';
import { NgFor, NgIf } from '@angular/common';
import { saveAs } from 'file-saver'
@Component({
  selector: 'app-transfer-window',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './transfer-window.component.html',
  styleUrl: './transfer-window.component.scss'
})
export class TransferWindowComponent implements OnInit {
  bookingForm: FormGroup = this.fb.group({});
  @Input() booking: any
  constructor(public bs: BookingService, private fb: FormBuilder) {
  }
  ngOnInit(): void {
    let bookingKeys = Object.keys(this.booking)
    let bookingValues = Object.values(this.booking)
    bookingKeys.forEach((key, index) => {
      this.bookingForm.addControl(key, new FormControl(bookingValues[index]));
    });
  }


  onSubmit() {
    const data = [this.bookingForm.value]
    const header = Object.keys(data[0]);
    let csv = data.map(row =>
      header.map(fieldName => {
        const value = row[fieldName];
        return `"${value === null || value === undefined ? "" : value}"`;
      }).join(';')
    );
    csv.unshift(header.map(word => `"${word}"`).join(';'));
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], { type: 'text/csv' })
    saveAs(blob, this.booking.serviceID);
  }


  cancelBooking(){
    this.bookingForm.reset();
    this.booking = null;
  }


  ifBookingNotEmpty(): boolean {
    return this.booking && Object.keys(this.booking).length > 0;
  }



}
