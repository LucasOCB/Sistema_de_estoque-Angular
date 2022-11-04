import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttProdutoComponent } from './att-produto.component';

describe('AttProdutoComponent', () => {
  let component: AttProdutoComponent;
  let fixture: ComponentFixture<AttProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
