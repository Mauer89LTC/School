import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SodaService } from '../services/soda.service';
import { Soda } from '../models/soda.model';

@Component({
  selector: 'app-soda-detail',
  templateUrl: './soda-detail.page.html',
  styleUrls: ['./soda-detail.page.scss'],
})
export class SodaDetailPage implements OnInit {
  soda: Soda | undefined;

  constructor(
    private route: ActivatedRoute,
    private sodaService: SodaService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const sodaId = params.get('id');
      console.log('Soda ID from route:', sodaId);
      if (sodaId) {
        this.sodaService.getSodas().subscribe(
          (sodas: Soda[]) => {
            this.soda = sodas.find((soda) => soda.soda_id === sodaId);
            if (this.soda) {
              console.log('Fetched soda details:', this.soda);
            } else {
              console.error('Soda not found');
            }
          },
          (error) => {
            console.error('Error retrieving soda data:', error);
          }
        );
      } else {
        console.error('No soda ID provided in route.');
      }
    });
  }
}














