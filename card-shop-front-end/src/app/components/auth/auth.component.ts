import { Component, Input, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [MessageService]
})
export class AuthComponent implements OnInit {

  admins : any = {};

  public loginForm : FormGroup;

  valid : Boolean = false;
  
  @Input('ngModel')
  admin : Admin;

  constructor(private formbuilder : FormBuilder, private router : Router, private authService : AuthService,private messageService : MessageService) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: "",
      password: ""
    });
    this.authService.getAdminList().subscribe(res => {
      this.admins = res

    })


  }

  login(){
    console.log(this.admins)
    console.log(this.loginForm.value.email)
    console.log(this.loginForm.value.password)
    console.log("clicked")


    console.log("hi " + this.authService.login(this.loginForm.value.email, this.loginForm.value.password, this.admins))

    if(this.authService.login(this.loginForm.value.email, this.loginForm.value.password, this.admins)){
      this.loginForm.reset()
      this.router.navigate(["admin"])
    }else{
      this.messageService.add({key: 'tc', severity:'error', detail: 'Invalid Username or Password'});
    }

  }

  forgotPassword(){
    this.messageService.add({key: 'tc',severity : 'info',detail: 'Please contact (603)-998-6741'});
  }



}


  