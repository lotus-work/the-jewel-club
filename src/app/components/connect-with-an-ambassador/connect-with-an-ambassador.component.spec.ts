import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectWithAnAmbassadorComponent } from './connect-with-an-ambassador.component';

describe('ConnectWithAnAmbassadorComponent', () => {
  let component: ConnectWithAnAmbassadorComponent;
  let fixture: ComponentFixture<ConnectWithAnAmbassadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConnectWithAnAmbassadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnectWithAnAmbassadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
