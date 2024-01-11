import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{  
    id: string = '';
    formTitle = 'Create User';
    entryForm: FormGroup;
    userList: Array<any> = [];
    submitted = false;
    @BlockUI() blockUI!: NgBlockUI;

  constructor(    
    private formBuilder: FormBuilder,
    private router: Router,
  ){
    this.entryForm = this.formBuilder.group({})
  }

  ngOnInit(){
    this.entryForm = this.formBuilder.group({
      id: [null],
      employeeId: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      firstName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: [null, [Validators.minLength(2), Validators.maxLength(50)]],
    });    
  }

  GetUserList(){}

  CreateUser(){}

  async onFormSubmit() {
    debugger
    this.submitted = true;
    if (this.entryForm.invalid) {
        console.log(this.entryForm);        
        console.log("Form invalid error");        
        return;
    }

    this.blockUI.start('Saving...');

    const obj = {
        Id: this.id || '',
        EmployeeId: this.entryForm.value.employeeId.trim(), 
        FirstName: this.entryForm.value.firstName.trim(),
        LastName: this.entryForm.value.lastName.trim(),    
    };
    console.log(obj);
  }
}
