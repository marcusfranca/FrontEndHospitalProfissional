import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRelacionamentosComponent } from './create-relacionamentos.component';

describe('CreateRelacionamentosComponent', () => {
  let component: CreateRelacionamentosComponent;
  let fixture: ComponentFixture<CreateRelacionamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRelacionamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRelacionamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
