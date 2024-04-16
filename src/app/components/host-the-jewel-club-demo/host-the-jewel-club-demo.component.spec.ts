import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostTheJewelClubDemoComponent } from './host-the-jewel-club-demo.component';

describe('HostTheJewelClubDemoComponent', () => {
  let component: HostTheJewelClubDemoComponent;
  let fixture: ComponentFixture<HostTheJewelClubDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostTheJewelClubDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostTheJewelClubDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
