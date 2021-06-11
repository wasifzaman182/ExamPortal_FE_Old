import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor( private userService:UserService, private snackBar:MatSnackBar) { }

  public user={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
  };

  ngOnInit(): void {
  }

  formSubmit(){
   // alert("Form is submited");
   // console.log(this.user);
    if(this.user.username == '' || this.user.username ==null){
      //alert("Please enter username");
      this.snackBar.open('UserName can not be empty ','',{
        duration:300,
      });
      return;
    }

    console.log(this.user);
    //code for adding user
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        //show message on success
        console.log(data);
        //alert("data inserted successfully");
        Swal.fire('User Registered Successfully ', 'Done');
      },
      (error)=>{
        //show message on failur
        console.log(error);
        alert("Some thing went wrong"); 
      }
    );
  }

}
