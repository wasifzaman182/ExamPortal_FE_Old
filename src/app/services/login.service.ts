import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

 //method which will return current user details 
  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }

  //method to generate token
  public generateToken(loginData:any){

   return this.http.post(`${baseUrl}/generate-token`,loginData)
  }

  //generated token save into local storage

  public loginUser(token){
    localStorage.setItem('token', token);
    return true;
  }

  //method to check user is logged in or not
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr==undefined || tokenStr=='' || tokenStr==null){
      return false;
    }else{
      return true;
    }
  }

  //on logout  and user details should remove the toke from local storage
  public logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //get token from local storage
  public getToken(){
    return localStorage.getItem('token');
  }

  //save user details in local storage
  public setUser(user){
    localStorage.setItem('user', JSON.stringify(user));
  }

  //get user
  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.logOut();
      return null;
    }
  }

  //get user role
  public getUserRole(){
    let userRole= this.getUser();
    return userRole.authorities[0].authority;
  }

    

}
