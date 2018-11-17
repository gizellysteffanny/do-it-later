import { Component, OnInit } from '@angular/core';

import { Task } from '../task.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  task: Task = {title: ''};

  constructor() { }

  ngOnInit() {
  }

  save() {}

}
