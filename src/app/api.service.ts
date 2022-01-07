import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class GetApiService {

  constructor(private http:HttpClient) { }
 
postEmployee(data:any){
  return this.http.post<any>('http://localhost:3000/users',data)
  .pipe(map((res:any)=>{
  return res
  }))
}
getEmployee(data:any){
  return this.http.get<any>('http://localhost:3000/users',data)
  .pipe(map((res:any)=>{
  return res
  }))
}
updateEmployee(data:any, id:number){
  return this.http.put<any>('http://localhost:3000/users/'+id,data)
  .pipe(map((res:any)=>{
  return res
  }))
}
deleteEmployee(id:number){
  return this.http.delete<any>('http://localhost:3000/users/'+id)
  .pipe(map((res:any)=>{
  return res
  }))
}


}
