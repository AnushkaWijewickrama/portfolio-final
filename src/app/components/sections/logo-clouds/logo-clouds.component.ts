import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface ClientLogo {
  id: string;
  name: string;
  publicURL: string;
}

@Component({
  selector: 'app-logo-clouds',
  imports: [NgFor],
  templateUrl: './logo-clouds.component.html'
})
export class LogoCloudsComponent {
  clientLogos: ClientLogo[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadClientLogos();
  }

  private loadClientLogos(): void {
    this.http.get<ClientLogo[]>('/logos.json').subscribe(
      (data) => (this.clientLogos = data),
      (error) => console.error('Error loading client logos:', error)
    );
  }
}
