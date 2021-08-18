import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RemedyService } from 'src/app/services/remedy.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-remedy-user',
  templateUrl: './update-remedy-user.component.html',
  styleUrls: ['./update-remedy-user.component.css']
})
export class UpdateRemedyUserComponent implements OnInit {

  constructor(private _route : ActivatedRoute, private _remedy : RemedyService) { }

  rid = 0;
  remedy = 
    {
      category: '',
      status: 'Open',
      empId: '',
      description: '',
      adminId: '00',
    };
  


    ngOnInit(): void {
      this.rid = this._route.snapshot.params.rid;
      //alert(this.rid);
      this._remedy.getRemedy(this.rid).subscribe(
      (data:any) =>
      {
        this.remedy = data;
        //alert(data.category);
  
      },
      (error)=>
      {
        alert(error);
      }
      );
  
  
  
    }
    public update()
    {
      //alert(this.remedy);
      this._remedy.updateRemedy(this.remedy).subscribe(
        (date)=>{
          Swal.fire('updated!!','Successfull','success');
        },
        (error)=>{
          Swal.fire('Error',error,'error');
        }
      );
    }
  
  

}
