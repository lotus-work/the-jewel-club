import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerLegalComponent } from './banner-legal.component';

describe('BannerLegalComponent', () => {
  let component: BannerLegalComponent;
  let fixture: ComponentFixture<BannerLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerLegalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
