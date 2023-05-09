import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateProdutoPage } from './update-produto.page';

describe('UpdateProdutoPage', () => {
  let component: UpdateProdutoPage;
  let fixture: ComponentFixture<UpdateProdutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
