import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor( private userService:UserService) { }

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
      alert("Please enter username");
      return;
    }

    console.log(this.user);
    //code for adding user
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        //show message on success
        console.log(data);
        alert("data inserted successfully");
      },
      (error)=>{
        //show message on failur
        console.log(error);
        alert("Some thing went wrong"); 
      }
    );
  }

}
