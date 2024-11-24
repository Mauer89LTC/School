import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MySodasPage } from './my-sodas.page';

describe('MySodasPage', () => {
  let component: MySodasPage;
  let fixture: ComponentFixture<MySodasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MySodasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
