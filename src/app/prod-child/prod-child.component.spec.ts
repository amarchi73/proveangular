import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdChildComponent } from './prod-child.component';

describe('ProdChildComponent', () => {
  let component: ProdChildComponent;
  let fixture: ComponentFixture<ProdChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
