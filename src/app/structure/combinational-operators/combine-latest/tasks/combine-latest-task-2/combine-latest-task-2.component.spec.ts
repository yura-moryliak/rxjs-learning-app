import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestTask2Component } from './combine-latest-task-2.component';

describe('CombineLatestTask2Component', () => {
  let component: CombineLatestTask2Component;
  let fixture: ComponentFixture<CombineLatestTask2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineLatestTask2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
