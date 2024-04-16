import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatAJewelClubDemoComponent } from './what-a-jewel-club-demo.component';

describe('WhatAJewelClubDemoComponent', () => {
  let component: WhatAJewelClubDemoComponent;
  let fixture: ComponentFixture<WhatAJewelClubDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatAJewelClubDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatAJewelClubDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
