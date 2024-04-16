import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTheJewelClubComponent } from './join-the-jewel-club.component';

describe('JoinTheJewelClubComponent', () => {
  let component: JoinTheJewelClubComponent;
  let fixture: ComponentFixture<JoinTheJewelClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JoinTheJewelClubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinTheJewelClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
