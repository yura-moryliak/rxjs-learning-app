import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestTask5Component } from './combine-latest-task-5.component';

describe('CombineLatestTask5Component', () => {
  let component: CombineLatestTask5Component;
  let fixture: ComponentFixture<CombineLatestTask5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineLatestTask5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestTask5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
