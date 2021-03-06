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

        //logging the current user
        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe(
          (user:any)=>{

          this.login.setUser(user);
          console.log(user);
          });

          //redirecting accordinly to user role
          if(this.login.getUserRole()=='ADMIN'){

            window.location.href='/admin-dashboard';

          }
          else if(this.login.getUserRole() =='NORMAL'){

            window.location.href='/user-dashboard';
          }else{
            this.login.logOut();
          }

      },
      (error)=>{
        console.log('Failed');
        console.log(error); 
        this.snackBar.open('Invalid Details!!', '',{
          duration:3000,
        });
      }
    );
  }
 
}
