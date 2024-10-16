import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { BookingService } from '../booking.service';
import { TransferWindowComponent } from "../transfer-window/transfer-window.component";
import { NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { log } from 'node:console';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, HttpClientModule, TransferWindowComponent, NgIf, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  err = '';
  pdfSource: SafeResourceUrl | null = null;
  pdf: any
  constructor(private http: HttpClient, public bs: BookingService, private sanitizer: DomSanitizer) { }

  onFileSelected(event: any) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.pdf = fileInput.files[0];
      const objectUrl = URL.createObjectURL(this.pdf);
      this.pdfSource = this.sanitizer.bypassSecurityTrustResourceUrl(objectUrl);
    }
  }


  async sendToParse() {
    this.err = ''
    this.bs.bookings = []
    const url = 'http://localhost/transfer-parser/index.php'
    const formData = new FormData();
    formData.append('pdf', this.pdf);

    const response: any = await lastValueFrom(this.http.post(url, formData));
    if (response.error) {
      this.err = response.error;
    } else {
      this.bs.createTransfer(response);
    }

  }

}