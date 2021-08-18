import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { RemedyService } from 'src/app/services/remedy.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-complain',
  templateUrl: './add-complain.component.html',
  styleUrls: ['./add-complain.component.css']
})
export class AddComplainComponent implements OnInit {

  
  remedy = 
    {
      category: '',
      status: 'Open',
      empId: '',
      description: '',
      adminId: '00',
    };
  

  constructor(private _red:RemedyService,private _login:LoginService,private _snak : MatSnackBar) { }

  ngOnInit(): void {
    
    this._login.getCurrentUser().subscribe(
      (data: any) =>{
        this.remedy.empId = data.empId;
        //alert(this.e);
      },
      (error:any) =>{
        alert(error);
      }
    );


  
  }

  addremedy()
  {
    if(this.remedy.category==''|| this.remedy.category==null || this.remedy.description==''|| this.remedy.description==null )
    {
      this._snak.open("Complete Information Required","",{
        duration:3000,
      });
      return;
    }
    this._red.addRemedy(this.remedy).subscribe(
      (data:any) =>{
        Swal.fire('Success','Remedy is added','success');
      },
      (error)=>{
        Swal.fire('Error','Remedy not added','error');
      }

    );
  }

}
