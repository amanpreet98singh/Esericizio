import { Injectable } from '@angular/core';
import { CanActivate }    from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  canActivate() {​
    if(sessionStorage.getItem('login')!=null){
    console.log('AuthGuard#canActivate called');​
    return true;​
    }
    else{
      return false;
    }
  }​
  constructor() { }
}
