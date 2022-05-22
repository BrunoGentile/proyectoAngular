import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
 
 
  url2: string = "https://comunidad-apirest.herokuapp.com/api";
  url: string = "https://error-pueblada-api.herokuapp.com/api"
  
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
	  return this.http.get(this.url2 + `/laboral/${id}`);
	}
  getAll(): Observable<any> {
    console.log("pasa por getAll?")
	  return this.http.get(this.url2+'/laboral');
	}
  //terminar en algun momento
  update(id: number, skill: any): Observable<any>{
    return this.http.put(this.url2 + `/laboral/${id}`, skill);
  }

  //terminar en algun momento
  delete(id: number): Observable<any>{
    return this.http.delete(this.url2 + `/laboral/${id}`);
  }
 save(skill:any) : Observable<any>{
   return this.http.post(this.url2 + `/laboral/`, skill);
 }
 
}
