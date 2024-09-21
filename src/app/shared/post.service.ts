import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ipost, ipostresponse } from './model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
baseurl:string=environment.baseulr;
posturl:string=`${this.baseurl}/posts.json`
  constructor(private _http :HttpClient) { }


  getallpost():Observable<ipost[]>{
    return this._http.get<ipostresponse>(this.posturl)
    .pipe(
     map(res => {
      const postobj=[]
      for (const key in res) {
        let obj={
          ...res[key],
          id:key
        }
        postobj.push(obj)

       
      }
      return postobj
     })
    )
  }

  getsinglepost(id:string):Observable<ipost>{
    let singleurl=`${this.baseurl}/posts/${id}.json`
    return this._http.get<ipost>(singleurl)
  }

  getupdatepost(obj:ipost):Observable<ipost>{
    let updateposturl=`${this.baseurl}/posts/${obj.id}.json`
    return this._http.patch<ipost>(updateposturl, obj)
  }

  getpost(post:ipost):Observable<ipost>{
    return this._http.post<ipost>(this.posturl, post)
  }

  getremove(id:string):Observable<ipost>{
    let deleurl=`${this.baseurl}/posts/${id}.json`
    return this._http.delete<ipost>(deleurl)
  }
}
