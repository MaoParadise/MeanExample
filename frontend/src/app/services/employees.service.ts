import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  
  employees: Employee[];
  selectedEmployee: Employee;
  API_URI = 'http://localhost:3000/api/';


  
  constructor(
    private http: HttpClient
  ) {
    this.selectedEmployee = new Employee();
   }

  getEmployees(){
    return this.http.get(this.API_URI+'employees');
  }

  postEmployee(employee: Employee){
    return this.http.post(this.API_URI+'employees', employee);
  }

  putEmployee(employee: Employee){
    return this.http.put(this.API_URI+`employees/${employee._id}`, employee);
  }

  deleteEmployee(_id: string){
    return this.http.delete(this.API_URI+`employees/${_id}`);
  }

}
