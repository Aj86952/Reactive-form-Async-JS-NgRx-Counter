import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncJsComponent } from './async-js.component';

describe('AsyncJsComponent', () => {
  let component: AsyncJsComponent;
  let fixture: ComponentFixture<AsyncJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsyncJsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsyncJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
