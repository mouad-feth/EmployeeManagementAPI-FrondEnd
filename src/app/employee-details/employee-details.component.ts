import {Component, OnInit} from '@angular/core';
import {Employee} from "../models/employee";
import {EmployeeService} from "../services/employee.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{


  employee: Employee = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    position: '',
    department: ''
  };

  errorMessage: string = '';


  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute, private location:Location) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=> {
      const id = params.get('id');
      if (id){
        this.loadEmployee(id);
      }
    });
  }

  loadEmployee(id:string) {
    this.employeeService.getEmployeeById(id).subscribe((data)=> {
      this.employee = data;
    },
      error => {
      console.error('Error fetching employee: ', error);
        this.errorMessage = 'Failed to load employee details. Please try again later.';
      });

  }

  goBack() {
    this.location.back();
  }
}
