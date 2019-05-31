import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesTableComponent } from './groceries-table.component';

describe('GroceriesTableComponent', () => {
  let component: GroceriesTableComponent;
  let fixture: ComponentFixture<GroceriesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceriesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
