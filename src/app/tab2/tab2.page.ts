import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SodaService } from '../services/soda.service';
import { Soda } from '../models/soda.model';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  sodas: Soda[] = [];
  loading: boolean = true;
  errorMessage: string | null = null;

  constructor(
    private router: Router,
    private sodaService: SodaService
  ) {}

  ngOnInit() {
    this.loadSodas();
  }

  loadSodas() {
    this.sodaService.getSodas().subscribe({
      next: (sodas: Soda[]) => {
        console.log('Fetched sodas:', sodas);  
        this.sodas = sodas;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load sodas. Please try again later.';
        console.error('Error fetching sodas:', error);
        this.loading = false;
      },
    });
  }

  
  goToDetail(sodaId: string): void {
    console.log('Navigating to detail with sodaId:', sodaId);
    if (sodaId) {
      this.router.navigate(['/soda-detail', sodaId]); // Pass sodaId to the route
    } else {
      console.error('Invalid sodaId');
    }
  }
  
}










