import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterOutlet } from '@angular/router'; // Import RouterModule
import { AppComponent } from './app.component';
import { TaskFormComponent } from './pages/task-form/task-form.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskService } from './services/task.service';
@NgModule({
    declarations: [
        TaskListComponent,
        TaskFormComponent
    ],
    imports: [
        FormsModule,
        RouterOutlet,
        CommonModule,
        MatPaginatorModule,
        MatTableModule,
        ReactiveFormsModule,
    ],
    exports: [
        DatePipe,
        CommonModule,
        MatPaginatorModule,
        MatTableModule,
        FormsModule,
        RouterOutlet,
        TaskFormComponent,
        ReactiveFormsModule,
    ],
    providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule { }
