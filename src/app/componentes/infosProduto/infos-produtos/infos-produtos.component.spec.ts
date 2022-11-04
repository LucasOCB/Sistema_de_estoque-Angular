import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosProdutosComponent } from './infos-produtos.component';

describe('InfosProdutosComponent', () => {
  let component: InfosProdutosComponent;
  let fixture: ComponentFixture<InfosProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
