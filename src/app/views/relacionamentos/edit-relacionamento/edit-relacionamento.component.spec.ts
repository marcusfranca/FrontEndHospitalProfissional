import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRelacionamentoComponent } from './edit-relacionamento.component';

describe('EditRelacionamentoComponent', () => {
  let component: EditRelacionamentoComponent;
  let fixture: ComponentFixture<EditRelacionamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRelacionamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRelacionamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
