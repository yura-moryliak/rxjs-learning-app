import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgTemplateOutlet} from '@angular/common';

interface Link {
  label: string;
  path?: string;
  children?: Link[];
  expanded?: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    NgTemplateOutlet
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  links: Link[] = [
    {
      label: 'Intro',
      path: 'intro'
    },
    {
      label: 'Combinational operators',
      expanded: true,
      children: [
        {
          label: 'combineLatest',
          path: 'combinational-operators/combine-latest',
        },
        {
          label: 'concat',
          path: 'combinational-operators/concat',
        },
      ]
    },
    {
      label: 'Conditional operators',
      // path: 'conditional-operators',
      children: []
    },
    {
      label: 'Creational operators',
      // path: 'creational-operators',
      children: []
    },
    {
      label: 'Transformational operators',
      // path: 'transformational-operators',
      children: []
    },
    {
      label: 'Filtering operators',
      // path: 'filtering-operators',
      children: []
    },
    {
      label: 'Multicasting',
      // path: 'multicasting',
      children: []
    },
    {
      label: 'Subjects',
      // path: 'subjects',
      children: []
    },
    {
      label: 'Error handling',
      // path: 'error-handling',
      children: []
    },
    {
      label: 'Utility',
      // path: 'utility',
      children: []
    }
  ];

}
