import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdectsComponent } from './prodects.component';

describe('ProdectsComponent', () => {
  let component: ProdectsComponent;
  let fixture: ComponentFixture<ProdectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProdectsComponent]
    });
    fixture = TestBed.createComponent(ProdectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
