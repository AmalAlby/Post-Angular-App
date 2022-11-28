import { Component } from '@angular/core';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent {

  userId=""
  id=""
  title=""
  body=""


  readvalues=()=>{  

    let data:any={
      "userId": this.userId,
      "id": this.id,
      "title": this.title,
      "body":this.body
    }

  }

}
