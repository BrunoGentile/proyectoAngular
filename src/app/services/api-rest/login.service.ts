import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Persona } from '../interface/Persona';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private loggedo$ = new BehaviorSubject<boolean>(false);
  loading:boolean ;
  
  constructor(private http: HttpClient) {
    this.loading = false;        
   }
  
  LogIn(){
    this.loggedo$.next(true);
  }
  
  LogOut(){
    this.loggedo$.next(false);
  }
  
  LogState() {
    return this.loggedo$.asObservable();
  }
 
  /*
  isLoggedIn(): boolean {
    let personaFromStorage: Persona = JSON.parse(localStorage.getItem('persona') || '{}');
    if(personaFromStorage.token) {
      return true; // si hay un token, está loggeado
    }
    return false; //no está loggeado
  }
  */  
}
