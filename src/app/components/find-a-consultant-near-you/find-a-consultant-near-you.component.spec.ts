import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAConsultantNearYouComponent } from './find-a-consultant-near-you.component';

describe('FindAConsultantNearYouComponent', () => {
  let component: FindAConsultantNearYouComponent;
  let fixture: ComponentFixture<FindAConsultantNearYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindAConsultantNearYouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindAConsultantNearYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
