import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildtwoComponent } from './viewchildtwo.component';

describe('ViewchildtwoComponent', () => {
  let component: ViewchildtwoComponent;
  let fixture: ComponentFixture<ViewchildtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewchildtwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewchildtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
