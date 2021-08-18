import { Component, OnInit } from '@angular/core';
import { RemedyService } from 'src/app/services/remedy.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-complains',
  templateUrl: './view-complains.component.html',
  styleUrls: ['./view-complains.component.css']
})
export class ViewComplainsComponent implements OnInit {

  remedy = [
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
      rid: 24,
      category: 'Check',
      status: 'Assigned',
      empId: 12,
      creationDate: '12/21/33',
      description: 'This is testing',
      adminId: 11
    },
  ];

  constructor(private _remedy : RemedyService) { }

  ngOnInit(): void {

    this._remedy.remedy().subscribe(
    (data:any)=>
    {
      this.remedy=data;
    },
    (error) => {
      console.log(error);
      alert(error);
    }
    )
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
