import { Component } from '@angular/core';
import {CombineLatestTask1Component} from './tasks/combine-latest-task-1/combine-latest-task-1.component';
import {CombineLatestTask2Component} from './tasks/combine-latest-task-2/combine-latest-task-2.component';

@Component({
  selector: 'app-combine-latest',
  imports: [
    CombineLatestTask1Component,
    CombineLatestTask2Component
  ],
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.scss'
})
export class CombineLatestComponent {

}
