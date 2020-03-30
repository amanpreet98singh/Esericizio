import { Injectable } from '@angular/core';
import { CanActivate, Router }    from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  constructor(private router: Router){}

  canActivate() {​
    if(sessionStorage.getItem('login')!=null){
      return true;​
    }
    else{
      this.router.navigateByUrl('/Login');
      return false;
    }
  }​
}
