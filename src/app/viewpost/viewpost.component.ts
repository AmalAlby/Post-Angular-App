import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent {


  constructor(private api:ApiService){

    api.post().subscribe(

      (response)=>{

        this.post=response;

      }

    )

  }

  post:any=[]

}
