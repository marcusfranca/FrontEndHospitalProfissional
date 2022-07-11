import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalCreateComponent } from './profissional-create.component';

describe('ProfissionalCreateComponent', () => {
  let component: ProfissionalCreateComponent;
  let fixture: ComponentFixture<ProfissionalCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfissionalCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfissionalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
