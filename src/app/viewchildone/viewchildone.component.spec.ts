import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildoneComponent } from './viewchildone.component';

describe('ViewchildoneComponent', () => {
  let component: ViewchildoneComponent;
  let fixture: ComponentFixture<ViewchildoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewchildoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewchildoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
