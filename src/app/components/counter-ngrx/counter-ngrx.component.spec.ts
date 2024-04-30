import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterNgrxComponent } from './counter-ngrx.component';

describe('CounterNgrxComponent', () => {
  let component: CounterNgrxComponent;
  let fixture: ComponentFixture<CounterNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterNgrxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
