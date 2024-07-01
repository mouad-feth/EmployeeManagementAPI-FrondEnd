import {Component, OnInit} from '@angular/core';
import {Employee} from "../models/employee";
import {EmployeeService} from "../services/employee.service";
import {catchError, throwError} from "rxjs";
import {Location} from "@angular/common";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees: Employee [] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'actions'];
  errorMessage: string = '';

  constructor(private employeeService:EmployeeService, private location:Location) {
  }
  ngOnInit(): void {
    this.loadEmployees();
  }


   loadEmployees() {
    this.employeeService.getEmployees().pipe(
      catchError(error=>{
        console.error('Error loading employees:', error);
        this.errorMessage= 'Failed to load employees. Please try again later.';
        return throwError('Failed to load employees.');
      })
    ).subscribe((data) => {
      this.employees= data;
    });
  }

  deleteEmployee(id:string): void{
    if (confirm('Are you sure that you want to delete this employee')){
      this.employeeService.deleteEmployee(id).
      pipe( catchError( error => {
        console.error('Error deleting employee:', error);
        this.errorMessage = 'Failed to delete employee. Please try again later.';
        return throwError('Failed to delete employee.');
      })).subscribe(() => {
        this.loadEmployees();
      });
    }

  }

}
