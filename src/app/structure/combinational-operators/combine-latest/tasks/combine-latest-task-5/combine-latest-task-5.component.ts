import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, map, of, Subscription, combineLatest, filter} from 'rxjs';
import {TaskBaseComponent} from '../../../../task.base';
import {TaskOverviewComponent} from '../../../../../common/task-overview/task-overview.component';

@Component({
  selector: 'app-combine-latest-task-5',
  imports: [
    TaskOverviewComponent
  ],
  templateUrl: './combine-latest-task-5.component.html',
  styleUrl: './combine-latest-task-5.component.scss'
})
export class CombineLatestTask5Component extends TaskBaseComponent implements OnInit, OnDestroy {
  private readonly subscription: Subscription = new Subscription();

  staticLIstOfNumbers$ = of(5, 10, 15, 20);
  dynamicListOfNumbers$ = interval(1000).pipe(map((val) => val * 5));

  number1: number | undefined;
  number2: number | undefined;

  ngOnInit(): void {
    const sub = combineLatest([this.staticLIstOfNumbers$, this.dynamicListOfNumbers$]).pipe(
      filter(([staticList, dynamicList]) => staticList > 10 && (dynamicList > 10 && dynamicList <= 45)),
    ).subscribe(([num1, num2]) => {
      this.number1 = num1;
      this.number2 = num2;
    });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
