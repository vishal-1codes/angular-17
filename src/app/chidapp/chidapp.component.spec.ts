import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChidappComponent } from './chidapp.component';

describe('ChidappComponent', () => {
  let component: ChidappComponent;
  let fixture: ComponentFixture<ChidappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChidappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChidappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
