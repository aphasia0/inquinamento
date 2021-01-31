import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquinamentoComponent } from './inquinamento.component';

describe('InquinamentoComponent', () => {
  let component: InquinamentoComponent;
  let fixture: ComponentFixture<InquinamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquinamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InquinamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
