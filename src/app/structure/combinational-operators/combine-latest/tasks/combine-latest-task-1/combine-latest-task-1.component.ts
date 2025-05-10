import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TaskOverviewComponent} from '../../../../../common/task-overview/task-overview.component';
import {combineLatest, debounceTime, distinctUntilChanged, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-combine-latest-task-1',
  imports: [
    TaskOverviewComponent,
    ReactiveFormsModule
  ],
  templateUrl: './combine-latest-task-1.component.html',
  styleUrl: './combine-latest-task-1.component.scss'
})
export class CombineLatestTask1Component implements OnInit, OnDestroy {
  firstNameFormControl: FormControl<string | null> = new FormControl('');
  lastNameFormControl: FormControl<string | null> = new FormControl('');
  fullName: string | undefined;

  private readonly firstNameSource$: Observable<string | null> = this.firstNameFormControl.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged()
  );
  private readonly lastNameSource$: Observable<string | null> = this.lastNameFormControl.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged()
  );
  private readonly subscription: Subscription = new Subscription();

  ngOnInit(): void {
    const sub: Subscription = combineLatest([this.firstNameSource$, this.lastNameSource$]).subscribe({
      next: ([firstName, lastName]) => this.fullName = `${firstName} ${lastName}`
    });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
