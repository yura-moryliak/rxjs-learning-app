import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription, timer, combineLatest} from 'rxjs';
import {TaskBaseComponent} from '../../../../task.base';
import {TaskOverviewComponent} from '../../../../../common/task-overview/task-overview.component';

@Component({
  selector: 'app-combine-latest-task-2',
  imports: [
    TaskOverviewComponent
  ],
  templateUrl: './combine-latest-task-2.component.html',
  styleUrl: './combine-latest-task-2.component.scss'
})
export class CombineLatestTask2Component extends TaskBaseComponent implements OnInit, OnDestroy {
  private readonly subscription: Subscription = new Subscription();

  timer1$: Observable<number> = timer(0, 1000);
  timer2$: Observable<number> = timer(0, 2000);

  timer1Value: number | undefined;
  timer2Value: number | undefined;

  ngOnInit(): void {
    const sub = combineLatest([this.timer1$, this.timer2$]).subscribe(([timer1Value, timer2Value]) => {
      this.timer1Value = timer1Value;
      this.timer2Value = timer2Value;
    });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
