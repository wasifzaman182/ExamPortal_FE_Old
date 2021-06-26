import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
  username:'',
    password:'',
  };

  constructor(private snackBar:MatSnackBar, private login:LoginService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log("Btn clicked ");

    if(this.loginData.username.trim()=='' ||this.loginData.username==null){

      this.snackBar.open('Username is required  !!', '',{
        duration:3000,
      });
      return;
    }

    
    if(this.loginData.password.trim()=='' ||this.loginData.password==null){

      this.snackBar.open('password is required  !!', '',{
        duration:3000,
      });
      return;
    } 

    //request to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("Success");
        console.log(data);
      },
      (error)=>{
        console.log('Failed');
        console.log(error);
      }
    );
  }
 
}
