import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: AngularFirestoreCollection<Task>;

  constructor(private db: AngularFirestore) {
    this.setTasks();
  }

  private setTasks(): void {
    this.tasks = this.db.collection<Task>('/tasks',
      (ref: CollectionReference) => ref.orderBy('done', 'asc').orderBy('title', 'asc'));
  }

  show(uuid: string): Observable<Task> {
    return this.tasks.doc<Task>(uuid).valueChanges();
  }

  create(task: Task): Promise<void> {
    const uuid = this.db.createId();
    return this.tasks.doc<Task>(uuid).set({
      uuid,
      title: task.title,
      done: false
    });
  }

  update(task: Task): Promise<void> {
    return this.tasks.doc<Task>(task.uuid).update(task);
  }

  delete(task: Task): Promise<void> {
    return this.tasks.doc<Task>(task.uuid).delete();
  }
}
