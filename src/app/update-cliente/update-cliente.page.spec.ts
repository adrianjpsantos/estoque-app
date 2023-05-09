import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateClientePage } from './update-cliente.page';

describe('UpdateClientePage', () => {
  let component: UpdateClientePage;
  let fixture: ComponentFixture<UpdateClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
