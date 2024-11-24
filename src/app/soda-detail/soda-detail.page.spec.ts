import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SodaDetailPage } from './soda-detail.page';

describe('SodaDetailPage', () => {
  let component: SodaDetailPage;
  let fixture: ComponentFixture<SodaDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SodaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
