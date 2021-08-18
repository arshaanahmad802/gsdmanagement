import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public login:LoginService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  public logout()
  {
    this.login.logout();

    window.location.href = '/login';
  }

  public showDetails()
  {
    this.snack.open("Hi "+this.login.getUser().firstName+" "+this.login.getUser().lastName,"",{
      duration:3000,
    });
    return;
  }

}
