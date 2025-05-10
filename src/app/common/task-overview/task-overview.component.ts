import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-task-overview',
  imports: [],
  templateUrl: './task-overview.component.html',
  styleUrl: './task-overview.component.scss'
})
export class TaskOverviewComponent {
  @Input({ required: true }) title: string | undefined;
  @Input({ required: true }) description: string | undefined;
}
