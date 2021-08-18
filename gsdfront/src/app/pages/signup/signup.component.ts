import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private snack:MatSnackBar) { }


  public user = {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phone: '',
    designation: '',
    question: '',
  };

  ngOnInit(): void {
  }



  formSubmit()
  {
    if(this.user.firstName == '' || this.user.firstName ==null)
    {
      this.snack.open('Something went wrong','ok',{
        duration:3000,
      });
      return;
    }

    console.log(this.user);
    this.userService.addUser(this.user).subscribe(
      (data:any) => {
        console.log(data);
        Swal.fire('Success','Save the Employee id '+ data.empId,'success')
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong','ok',{
          duration:3000,
        });
      }
    );
  }

}
