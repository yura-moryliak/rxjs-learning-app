import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
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

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
