import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectWithAmbassadorComponent } from './connect-with-ambassador.component';

describe('ConnectWithAmbassadorComponent', () => {
  let component: ConnectWithAmbassadorComponent;
  let fixture: ComponentFixture<ConnectWithAmbassadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConnectWithAmbassadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnectWithAmbassadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
