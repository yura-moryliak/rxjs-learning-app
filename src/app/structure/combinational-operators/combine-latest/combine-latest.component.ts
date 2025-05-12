import { Component } from '@angular/core';
import {CombineLatestTask1Component} from './tasks/combine-latest-task-1/combine-latest-task-1.component';
import {CombineLatestTask2Component} from './tasks/combine-latest-task-2/combine-latest-task-2.component';
import {CombineLatestTask3Component} from './tasks/combine-latest-task-3/combine-latest-task-3.component';
import {CombineLatestTask4Component} from './tasks/combine-latest-task-4/combine-latest-task-4.component';
import {CombineLatestTask5Component} from './tasks/combine-latest-task-5/combine-latest-task-5.component';

@Component({
  selector: 'app-combine-latest',
  imports: [
    CombineLatestTask1Component,
    CombineLatestTask2Component,
    CombineLatestTask3Component,
    CombineLatestTask4Component,
    CombineLatestTask5Component
  ],
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.scss'
})
export class CombineLatestComponent {

}
