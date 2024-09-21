import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { concatMap } from 'rxjs';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.scss']
})
export class PostformComponent implements OnInit {
postform!:FormGroup;
isshowbutton:boolean=false;
postid!:string;
  constructor(private _route :ActivatedRoute,
    private _post :PostService,
    private _router :Router
  ) { }

  ngOnInit(): void {
    this.createpost()
    this._route.params
    .pipe(
      concatMap((myparam:Params) => {
       this.postid=myparam['id']
       return this._post.getsinglepost(this.postid)
      })
    )
    .subscribe(res => {
      if(this.postid){
        this.isshowbutton=true
        this.postform.patchValue(res)
      }
    })

  }

  createpost(){
this.postform=new FormGroup({
  title:new FormControl(null),
  body:new FormControl(null)
})
  }

  onsubmit(){
    if(this.postform.valid){
      let obj={
        ...this.postform.value
      }
      this._post.getpost(obj)
      .subscribe(res => {
        this._router.navigate(['/'])
        console.log(res)
      })
    }

  }

  onupdatepost(){
    let ob={
      ...this.postform.value,
      id:this.postid
    }
    this._post.getupdatepost(ob)
    .subscribe(res => {
      console.log(res)
      this._router.navigate(['/'])
    })
  }

}
