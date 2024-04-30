import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraionFormComponent } from './registraion-form.component';

describe('RegistraionFormComponent', () => {
  let component: RegistraionFormComponent;
  let fixture: ComponentFixture<RegistraionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistraionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistraionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
