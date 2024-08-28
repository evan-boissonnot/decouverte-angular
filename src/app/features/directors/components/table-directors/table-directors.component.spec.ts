import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDirectorsComponent } from './table-directors.component';

describe('TableDirectorsComponent', () => {
  let component: TableDirectorsComponent;
  let fixture: ComponentFixture<TableDirectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableDirectorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
