import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalEditComponent } from './profissional-edit.component';

describe('ProfissionalEditComponent', () => {
  let component: ProfissionalEditComponent;
  let fixture: ComponentFixture<ProfissionalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfissionalEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfissionalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
