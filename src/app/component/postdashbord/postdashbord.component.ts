import { Component, OnInit } from '@angular/core';
import { ipost } from 'src/app/shared/model';
import { PostService } from 'src/app/shared/post.service';


@Component({
  selector: 'app-postdashbord',
  templateUrl: './postdashbord.component.html',
  styleUrls: ['./postdashbord.component.scss']
})
export class PostdashbordComponent implements OnInit {
postArray:Array<ipost>=[]
  constructor(private _postservice :PostService) { }

  ngOnInit(): void {
    this._postservice.getallpost()
    .subscribe(res => {
      console.log(res)
      this.postArray=res
    })
    
  }
  ondelte(id:string){
    let conformationmsg=confirm(`can the make sure the delete data form server`)
    if(conformationmsg){
      this._postservice.getremove(id)
      .subscribe(res => {
        this.postArray=this.postArray.filter(obj => (obj.id!==id))
        console.log(res)
      })
    }
  }

}
