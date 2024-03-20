import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaloneComponent } from './signalone.component';

describe('SignaloneComponent', () => {
  let component: SignaloneComponent;
  let fixture: ComponentFixture<SignaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignaloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
