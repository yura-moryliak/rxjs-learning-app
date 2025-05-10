import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {TaskOverviewComponent} from '../../../../../common/task-overview/task-overview.component';

@Component({
  selector: 'app-combine-latest-task-3',
  imports: [
    TaskOverviewComponent
  ],
  templateUrl: './combine-latest-task-3.component.html',
  styleUrl: './combine-latest-task-3.component.scss'
})
export class CombineLatestTask3Component implements OnInit, OnDestroy {
  private readonly subscription: Subscription = new Subscription();

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
