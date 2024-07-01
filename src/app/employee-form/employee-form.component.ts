import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../services/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit{
  employeeForm: FormGroup;
  employeeId: string | null = '';
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router, private location:Location
  ) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      position: ['', Validators.required],
      department: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.employeeId = params.get('id');
      if (this.employeeId) {
      this.loadEmployee();
      }
    })
  }

  loadEmployee() {
    this.employeeService.getEmployeeById(this.employeeId).subscribe(
      (data) => {
        this.employeeForm.patchValue(data);
      },
      (error) => {
        console.error('Error loading employee:', error);

      }
    );
  }

  onSubmit() {
    console.log('Route Employee ID:', this.employeeId);
    console.log('Form Data:', this.employeeForm.value);

    if (this.employeeForm.valid) {
      if (this.employeeId) {

        const formData = { ...this.employeeForm.value, id: this.employeeId };
        this.employeeService.updateEmployee(this.employeeId, formData).subscribe(
          () => {
            this.router.navigate(['/employees']);
          },
          (error) => {
            console.error('Error updating employee:', error);

          }
        );
      } else {

        this.employeeService.createEmployee(this.employeeForm.value).subscribe(
          () => {
            this.router.navigate(['/employees']);
          },
          (error) => {
            console.error('Error creating employee:', error);

          }
        );
      }
    } else {
      console.error('Form is invalid. Cannot submit.');

    }
  }


  goBack() {
    this.location.back();
  }
}
