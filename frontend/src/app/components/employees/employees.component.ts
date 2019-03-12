import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service'
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeesService]
})
export class EmployeesComponent implements OnInit {

  constructor( private employeeService: EmployeesService) { }

  ngOnInit() {
    this.getEmployee();
  }

  addEmployee(form: NgForm){
    if(form.value._id){
      this.employeeService.putEmployee(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        this.getEmployee();
        M.toast({html: 'Update Successfuly'})
      })
    } else{
      this.employeeService.postEmployee(form.value)
      .subscribe(
        res =>{
          this.resetForm(form);
          this.getEmployee();
          M.toast({html: 'Save Successfuly'})
        }
      );
    }
  }

  getEmployee(){
    this.employeeService.getEmployees()
    .subscribe(res => {
      this.employeeService.employees = res as Employee[];
      console.log(res);
    })
  }

  editEmployee(employee: Employee){
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(_id: string){
    if(confirm('Are you sure you want to delete it?')){
      this.employeeService.deleteEmployee(_id)
      .subscribe(res =>{
          this.getEmployee();
          M.toast({html: 'Delete Successfuly'})
      })
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }

}
