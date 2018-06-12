import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule,FormControl,Validators, ReactiveFormsModule,FormGroup,FormBuilder} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public myForm: FormGroup;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  constructor(public fb:FormBuilder){
      
  }

  ngOnInit(): void {

    this.emailCtrl =  this.fb.control('', [Validators.required,Validators.email]);
    this.passwordCtrl= this.fb.control('', [Validators.required,Validators.minLength(7)]);
    this.myForm = this.fb.group({
      email:this.emailCtrl,
      password:this.passwordCtrl
    });
    
  }

  getEmail(){
    return this.myForm.get('email');
  }
  
  getPassword(){
    return this.myForm.get('password');
  }
  title = 'app';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
