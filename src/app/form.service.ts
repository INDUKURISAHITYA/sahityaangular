import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {User} from './user'


@Injectable({
  providedIn: 'root'
})
export class FormService {
  
   public url='https://angularpostajob.firebaseio.com/post.json'
  constructor(private http:HttpClient) { }
  
 getcustomers(use:User)
 {
    return this.http.post<any>(this.url,use).pipe(catchError(this.errors))
 }

 senddata():Observable<any>
 {
  return this.http.get<any>(this.url).pipe(map(responsedata =>{const postArray:any=[];
    for(const key in responsedata)
    {            
       postArray.push(responsedata[key]); 
    }
    return postArray;
}))
 }
errors(err:HttpErrorResponse)
{
  return throwError(err)
}

   
}
