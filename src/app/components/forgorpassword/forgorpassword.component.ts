import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ForgetpassService } from 'src/app/core/services/forgetpass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgorpassword',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgorpassword.component.html',
  styleUrls: ['./forgorpassword.component.scss']
})
export class ForgorpasswordComponent {
  constructor(private _ForgetpassService:ForgetpassService,private _Router:Router){}

 step1:boolean=true;
 step2:boolean=false;
 step3:boolean=false;
 email:string='';
 userMsg:string='';

 forgotForm:FormGroup=new FormGroup({
  email:new FormControl('')
 });
 resetCodeForm:FormGroup=new FormGroup({
  resetCode:new FormControl('')
 });
 resetPassword:FormGroup=new FormGroup({
  newPassword:new FormControl('')
 });


 forgotPassword():void{
  const userEmail=this.forgotForm.value;
  this.email=userEmail.email;
 this._ForgetpassService.forgotpassword(userEmail).subscribe({
  next:(response)=>{
    console.log(response);
    this.userMsg=response.message;
    this.step1=false;
    this.step2=true;
  },
  error:(err)=>{
    this.userMsg=err.erorr.message;
  }
 })
 };
 resetCode():void{
  const resetCcode=this.resetCodeForm.value;
  this._ForgetpassService.resetCode(resetCcode).subscribe({
    next:(response)=>{
       this.userMsg=response.status;
       this.step2=false;
       this.step3=true;
    },
    error:(err)=>{
      this.userMsg=err.error.message;

    }
  })

 };
 newpassword():void{
  const resetForm=this.resetPassword.value;
  resetForm.email=this.email;
  this._ForgetpassService.resetPassword(resetForm).subscribe({
    next:(response)=>{
      if(response.token){
        localStorage.setItem('etoken',response.token);
        this._Router.navigate(['/home']);
      }
    },
    error:(err)=>{
      this.userMsg=err.error.message;
    }
  })
 }
}
