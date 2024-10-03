import { Routes } from '@angular/router';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskFormComponent } from './pages/task-form/task-form.component';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', component: TaskListComponent
    },
    {
        path: 'task-list', component: TaskListComponent
    },
    {
        path: 'task-form', component: TaskFormComponent
    }, 
];
