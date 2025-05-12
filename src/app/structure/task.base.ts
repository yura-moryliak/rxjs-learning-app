import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-task-base',
  template: ``,
  standalone: true
})
export class TaskBaseComponent {
  @Input() isCollapsed: boolean = false;
}
