import {Component, inject, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AsyncPipe} from '@angular/common';
import {Subscription, combineLatest, timer, mergeMap, Observable, map} from 'rxjs';
import {TaskBaseComponent} from '../../../../task.base';
import {TaskOverviewComponent} from '../../../../../common/task-overview/task-overview.component';

interface CatInterface {
  id: number;
  url: string;
  width: number;
  height: number;
}

interface TodoInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-combine-latest-task-4',
  imports: [
    TaskOverviewComponent,
    AsyncPipe
  ],
  templateUrl: './combine-latest-task-4.component.html',
  styleUrl: './combine-latest-task-4.component.scss'
})
export class CombineLatestTask4Component extends TaskBaseComponent implements OnDestroy {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly subscription: Subscription = new Subscription();

  private readonly catsApiUrl: string = 'https://api.thecatapi.com/v1/images/search?limit=4';
  private readonly todosApiUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  private readonly catsSource$ = timer(5000).pipe(
    mergeMap(() => this.httpClient.get<CatInterface[]>(this.catsApiUrl))
  )
  private readonly todosSource$ = timer(8000).pipe(
    mergeMap(() => this.httpClient.get<TodoInterface[]>(this.todosApiUrl))
  );

  catsAndTodos$: Observable<{ cats: CatInterface[], todos: TodoInterface[] }> = combineLatest([this.catsSource$, this.todosSource$]).pipe(
    map(([cats, todos]) => ({
      cats: cats,
      todos: todos,
    }))
  )

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
