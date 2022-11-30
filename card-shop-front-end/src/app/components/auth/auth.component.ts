import { Component, Input, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  admins : any = {};

  public loginForm : FormGroup;

  valid : Boolean = false;
  
  @Input('ngModel')
  admin : Admin;

  constructor(private authService : AuthService, private formbuilder : FormBuilder, private router : Router) { }

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
    // console.log(this.admins)
    // console.log(this.loginForm.value.email)
    // console.log(this.loginForm.value.password)


    for(let i in this.admins){
      if(this.admins[i]["email"] == this.loginForm.value.email && this.admins[i]["pWord"] == this.loginForm.value.password){
        this.valid = true;
      }
    }

    if(this.valid){
      alert("Login Successful")
      this.loginForm.reset()
      this.router.navigate(["admin"])
    }else{
      alert("Username or password are incorrect")
    }

  }



}


  