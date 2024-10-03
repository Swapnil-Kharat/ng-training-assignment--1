import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule],
  providers: [TaskService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoList';
}
