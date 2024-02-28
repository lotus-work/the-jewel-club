import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAAmbassadorNearYouComponent } from './find-a-ambassador-near-you.component';

describe('FindAAmbassadorNearYouComponent', () => {
  let component: FindAAmbassadorNearYouComponent;
  let fixture: ComponentFixture<FindAAmbassadorNearYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindAAmbassadorNearYouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindAAmbassadorNearYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
