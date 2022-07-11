import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionamentoComponent } from './relacionamento.component';

describe('RelacionamentoComponent', () => {
  let component: RelacionamentoComponent;
  let fixture: ComponentFixture<RelacionamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelacionamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelacionamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
