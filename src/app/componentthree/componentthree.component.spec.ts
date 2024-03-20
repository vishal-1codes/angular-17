import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentthreeComponent } from './componentthree.component';

describe('ComponentthreeComponent', () => {
  let component: ComponentthreeComponent;
  let fixture: ComponentFixture<ComponentthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentthreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
