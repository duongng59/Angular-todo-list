import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  taskObj: Task = new Task();
  taskArr: Task[] = [];
  addTaskValue: string=''; 
  editTaskValue: string='';
  constructor(private crudService: CrudService) { }
  ngOnInit(): void {
    this.editTaskValue='';
    this.addTaskValue='';
    this.taskObj = new Task();
    this.taskArr=[];
    this.getAllTask();
  }

// Create
  addTask() {
 if(!this.addTaskValue){alert("you haven't type anything")}
 else{
    this.taskObj.taskName=this.addTaskValue;
    this.crudService.addTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
      this.addTaskValue="";
      console.log()
    }, err => {
      alert("unable to add task"+err)
      console.log(this.taskObj)
    })}
  }

// Read
getAllTask() {
  this.crudService.getAllTask().subscribe(res => {
    this.taskArr= res
    console.log("all the taskes is hear")
  }, err => {
     alert("Cannot connect to the database. Please connect to JSON server to continue. Open your Terminal and access by typing: json-server --watch db.json")
     console.log(err)
  })
}

// Update
  editTask(){
    this.taskObj.taskName=this.editTaskValue;
    this.crudService.editTask(this.taskObj).subscribe(res=>{
      this.ngOnInit();
      console.log("task edited")
    },err =>{
      alert("unable to edit"+err)
    })
  }
  call(edit: Task){
    this.taskObj=edit;
    this.editTaskValue=edit.taskName
  }

// Delete
deleteTask(dtask:Task) {
  this.crudService.deleteTask(dtask).subscribe(res => {
    this.ngOnInit();
    console.log("task deleted")
  }, err => {
    alert("unable to delete task"+err)
  })
}
isChecked:Boolean=false;
completeItem(){

  {this.isChecked = !this.isChecked;  }
  console.log(this.isChecked)
  

}  }
  
