import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestTask3Component } from './combine-latest-task-3.component';

describe('CombineLatestTask3Component', () => {
  let component: CombineLatestTask3Component;
  let fixture: ComponentFixture<CombineLatestTask3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineLatestTask3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestTask3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
