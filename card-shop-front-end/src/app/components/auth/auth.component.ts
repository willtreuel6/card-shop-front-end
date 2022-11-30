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

  admins : any = [];

  public loginForm : FormGroup;
  
  @Input('ngModel')
  admin : Admin;

  constructor(private authService : AuthService, private formbuilder : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: "",
      password: ""
    })
  }

  login(){
    console.log("Clicked is hit")
    this.authService.getAdminList().subscribe(res => {
      this.admins = res

    })
    console.log(this.admins)

  }



}


  