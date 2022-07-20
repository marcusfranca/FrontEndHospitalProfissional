import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRelacionamentoComponent } from './list-relacionamento.component';

describe('ListRelacionamentoComponent', () => {
  let component: ListRelacionamentoComponent;
  let fixture: ComponentFixture<ListRelacionamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRelacionamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRelacionamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
