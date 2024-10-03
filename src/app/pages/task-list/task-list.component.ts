import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { AppConstants } from '../../services/appConstant';
import { TaskService } from '../../services/task.service';
import { TaskFormComponent } from '../task-form/task-form.component';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks = JSON.parse(JSON.stringify(AppConstants.taskList))
  assignedToOptions = AppConstants.assignedToOptions;
  statusOptions = AppConstants.statusOptions;
  priorityOptions = AppConstants.priorityOptions;
  currentPage: number = 0;
  pageSize: number = 5;
  searchTerm: string = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  filteredTasks: { selected: boolean; assignedTo: { id: string; name: string; }; status: { value: string; label: string; }; dueDate: any; priority: { value: string; label: string; }; comments: string; }[];

  constructor(private dialog: MatDialog, private taskService: TaskService) {
    this.filteredTasks = this.tasks;
    this.updatePaginatedTasks();

  }

  updateFilteredTasks() {
    let filteredTasks = this.tasks.filter((task: any) =>
      task.assignedTo.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    const startIndex = this.currentPage * this.pageSize;
    this.filteredTasks = JSON.parse(JSON.stringify(filteredTasks?.slice(startIndex, startIndex + this.pageSize)));
  }

  updatePaginatedTasks() {
    const startIndex = this.currentPage * this.pageSize;
    this.filteredTasks = this.tasks.slice(startIndex, startIndex + this.pageSize);
  }

  selectAll(event: any) {
    const checked = event.target.checked;
    this.tasks.forEach((task: any) => task.selected = checked);
  }
  onSearchChange(search: string) {
    this.searchTerm = search;
    this.updateFilteredTasks();
  }
  editTask(data: any, i: any) {
    this.openDialog(data, i)
  }

  deleteTask(index: number) {
    if (confirm('Do you want to delete task')) {
      this.tasks.splice(index, 1);
      this.filteredTasks.splice(index, 1)
    }
  }


  totalRecords() {
    return this.tasks.length;
  }

  pageEvent(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedTasks()
  }

  AddNew() {
    this.openDialog()
  }
  openDialog(data: any = null, i: any = null): void {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      width: '800px',
      height: 'auto',
      disableClose: true,
      data: {
        selectedRecord: data
      },
      panelClass: 'custom-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        data ? this.tasks[i] = result : this.tasks.push(result);
        this.updatePaginatedTasks()
      }
    });
  }
  /**
   * Get task list
   */
  getTaskList() {
    this.taskService.getData('getTaskList').subscribe({
      next: (res: any) => {
        console.log(res)
      }, error() {

      }, complete() {

      }
    })
  }
  deleteTaskData(data: any) {
    this.taskService.deleteData(`${'deleteTask'}/${data.id}`).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getTaskList();
      }, error() {

      }, complete() {

      }
    })
  }
  refreshData() {
    this.filteredTasks = JSON.parse(JSON.stringify(AppConstants.taskList));
    this.tasks = JSON.parse(JSON.stringify(AppConstants.taskList))
    this.updatePaginatedTasks();
  }
}

