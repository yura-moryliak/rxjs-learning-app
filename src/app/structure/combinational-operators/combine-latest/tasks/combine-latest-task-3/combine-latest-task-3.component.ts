import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, map, Observable, Subscription, take, timer, combineLatest} from 'rxjs';
import {TaskBaseComponent} from '../../../../task.base';
import {TaskOverviewComponent} from '../../../../../common/task-overview/task-overview.component';


@Component({
  selector: 'app-combine-latest-task-3',
  imports: [
    TaskOverviewComponent
  ],
  templateUrl: './combine-latest-task-3.component.html',
  styleUrl: './combine-latest-task-3.component.scss'
})
export class CombineLatestTask3Component extends TaskBaseComponent implements OnInit, OnDestroy {
  private readonly subscription: Subscription = new Subscription();

  private onlineSubscription: Subscription = new Subscription();
  private offlineSubscription: Subscription = new Subscription();

  private activeSubscription: Subscription = new Subscription();
  private inactiveSubscription: Subscription = new Subscription();

  onlineTimer$: Observable<number> = getTimer();
  offlineTimer$: Observable<number> = getTimer(0, 2000);

  activeTimer$: Observable<number> = getTimer(0, 2000);
  inactiveTimer$: Observable<number> = getTimer();

  userOnline$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  userActive$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  onlineOfflineTimerValue: number | undefined;
  activeInactiveTimerValue: number | undefined;

  isUserOnline: boolean = false;
  isUserActive: boolean  = false;

  isStatusChanged: boolean | undefined;
  showRestartButton: boolean | undefined;

  ngOnInit(): void {
    this.startTimers();
  }

  startTimers(): void {
    this.startOnlineTimer();
    this.startActiveTimer();

    const statusSub: Subscription = combineLatest([this.userOnline$, this.userActive$]).subscribe(([userOnline, userActive]) => {
      this.isUserOnline = userOnline;
      this.isUserActive = userActive;

      if (userOnline && userActive) {
        this.isStatusChanged = true;

        this.onlineSubscription.unsubscribe();
        this.activeSubscription.unsubscribe();

        this.startOfflineTimer();
        this.startInactiveTimer();
        this.combineOfflineInactiveStatuses();
      }
    });
    this.subscription.add(statusSub);
  }

  restartTimers(): void {
    this.clearStatuses();
    this.startTimers();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.offlineSubscription.unsubscribe();
    this.inactiveSubscription.unsubscribe();
  }

  private startOnlineTimer(): void {
    this.onlineSubscription = this.onlineTimer$.subscribe((value: number) => {
      this.onlineOfflineTimerValue = value;

      if (value === 0) {
        this.userOnline$.next(true);
      }
    });
  }

  private startActiveTimer(): void {
    this.activeSubscription = this.activeTimer$.subscribe((value: number) => {
      this.activeInactiveTimerValue = value;

      if (value === 0) {
        this.userActive$.next(true);
      }
    });
  }

  private startOfflineTimer(): void {
    this.offlineSubscription = this.offlineTimer$.subscribe((value: number) => {
      this.onlineOfflineTimerValue = value;

      if (value === 0) {
        this.userOnline$.next(false);
      }
    });
  }

  private startInactiveTimer(): void {
    this.inactiveSubscription = this.inactiveTimer$.subscribe((value: number) => {
      this.activeInactiveTimerValue = value;

      if (value === 0) {
        this.userActive$.next(false);
      }
    });
  }

  private combineOfflineInactiveStatuses(): void {
    const statusSub: Subscription = combineLatest([this.offlineTimer$, this.inactiveTimer$]).subscribe(([offlineTimerValue, inactiveTimerValue]) => {
      if (offlineTimerValue === 0 && inactiveTimerValue === 0) {
        this.showRestartButton = true;
      }
    });
    this.subscription.add(statusSub);
  }

  private clearStatuses(): void {
    this.isStatusChanged = false;
    this.showRestartButton = false;
  }
}

function getTimer(startDue = 0, interval = 1000): Observable<number> {
  return timer(startDue, interval).pipe(
    map((value) => 9 - value),
    take(10)
  )
}
