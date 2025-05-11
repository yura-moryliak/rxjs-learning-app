import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestTask4Component } from './combine-latest-task-4.component';

describe('CombineLatestTask4Component', () => {
  let component: CombineLatestTask4Component;
  let fixture: ComponentFixture<CombineLatestTask4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineLatestTask4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestTask4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
