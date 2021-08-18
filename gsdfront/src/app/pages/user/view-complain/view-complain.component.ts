import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { RemedyService } from 'src/app/services/remedy.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-complain',
  templateUrl: './view-complain.component.html',
  styleUrls: ['./view-complain.component.css']
})
export class ViewComplainComponent implements OnInit {

  e = 9;

  remedy = 
  [
    {
      rid: 23,
      category: 'Check',
      status: 'Assigned',
      empId: 12,
      creationDate: '12/21/33',
      description: 'This is testing',
      adminId: 11
    },
    {
      rid: 23,
      category: 'Check',
      status: 'Assigned',
      empId: 12,
      creationDate: '12/21/33',
      description: 'This is testing',
      adminId: 11
    },
  ];


  constructor(private _remedy:RemedyService,private _login:LoginService) { }

  ngOnInit(): void {

    this._login.getCurrentUser().subscribe(
      (data: any) =>{
        this.e = data.empId;
        //alert(data.empId);
      },
      (error:any) =>{
        alert(error);
      }
    );

    this._remedy.remedyUser(this.e).subscribe(
      (data:any)=>
      {
        this.remedy=data;
      },
      (error) => {
        console.log(error);
        alert(error);
      }
      );


  }

  deleteRemedy(rid)
  {
    alert("Really want to delete ?");
    this._remedy.deleteRemedy(rid).subscribe(
      (data)=>{

 
        Swal.fire('Success','Quiz is deleted','success');

      },
      (error : any)=>{
        Swal.fire(error,'Quiz is not deleted','error');
      }
      
    )
  }

}
