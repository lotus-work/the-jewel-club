import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTheJewelClubComponent } from './contact-the-jewel-club.component';

describe('ContactTheJewelClubComponent', () => {
  let component: ContactTheJewelClubComponent;
  let fixture: ComponentFixture<ContactTheJewelClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactTheJewelClubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactTheJewelClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
