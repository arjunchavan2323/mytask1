import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartformComponent } from './chartform.component';

describe('ChartformComponent', () => {
  let component: ChartformComponent;
  let fixture: ComponentFixture<ChartformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
