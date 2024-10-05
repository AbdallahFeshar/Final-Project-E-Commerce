import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpassService {

  constructor( private _HttpClient:HttpClient) { }
  besUrl:string=`https://ecommerce.routemisr.com/api/v1/auth/`;

   forgotpassword(userEmail:object):Observable<any>{
    return this._HttpClient.post(this.besUrl+`forgotPasswords`,userEmail);
   };
   resetCode(resetCode:object):Observable<any>{
    return this._HttpClient.post(this.besUrl+`verifyResetCode`,resetCode);
   };
   resetPassword(resetPasswordForm:object):Observable<any>{
      return this._HttpClient.put(this.besUrl+`resetPassword`,resetPasswordForm);
   }

}
