import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdashbordComponent } from './postdashbord.component';

describe('PostdashbordComponent', () => {
  let component: PostdashbordComponent;
  let fixture: ComponentFixture<PostdashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostdashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostdashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
