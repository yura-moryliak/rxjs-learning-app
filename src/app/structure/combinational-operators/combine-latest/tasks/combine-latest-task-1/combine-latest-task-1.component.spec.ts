import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestTask1Component } from './combine-latest-task-1.component';

describe('CombineLatestTask1Component', () => {
  let component: CombineLatestTask1Component;
  let fixture: ComponentFixture<CombineLatestTask1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineLatestTask1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
