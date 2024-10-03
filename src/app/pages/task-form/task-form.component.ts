import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppConstants } from '../../services/appConstant';
import { TaskService } from '../../services/task.service';
import { AppModule } from '../../app.module';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  taskForm: FormGroup | any;
  selectedData: any;
  assignedToOptions = AppConstants.assignedToOptions;
  statusOptions = AppConstants.statusOptions;
  priorityOptions = AppConstants.priorityOptions;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<TaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.selectedData = data.selectedRecord;

    this.formBuild();
  }
  formBuild() {
    this.taskForm = this.fb.group({
      assignedTo: ['', Validators.required],
      status: ['', Validators.required],
      dueDate: ['', Validators.required],
      priority: ['', Validators.required],
      comments: ['']
    });
    if (this.selectedData) {
      const assignedToObject = this.assignedToOptions.find(person => person.id === this.selectedData.assignedTo.id);
      const statusObject = this.statusOptions.find(status => status.value === this.selectedData.status.value);
      const priorityObject = this.priorityOptions.find(priority => priority.value === this.selectedData.priority.value);
      this.taskForm.patchValue({
        assignedTo: assignedToObject,
        status: statusObject,
        dueDate: new Date().toISOString().split('T')[0],
        priority: priorityObject,
        comments: this.selectedData.comments
      })
    }

  }
  ngOnInit(): void { }

  onSubmit(): void {
    if (this.taskForm.valid) {
      this.dialogRef.close(this.taskForm.value);
      this.selectedData ? this.updateTask() : this.addTask();
    }
  }
  onCancel(): void {
    
    this.dialogRef.close();
  }
  updateTask() {
    // this.taskService.putData(`${'updateTask'}/${this.selectedData.id}`, this.taskForm.value).subscribe({
    //   next: (res: any) => {
    //     console.log(res)
    //   }, error() {

    //   }, complete() {

    //   }
    // })
  }
  addTask() {
    // this.taskService.postData(`${'addTask'}`, this.taskForm.value).subscribe({
    //   next: (res: any) => {
    //     console.log(res)
    //   }, error() {

    //   }, complete() {

    //   }
    // })
  }

}
