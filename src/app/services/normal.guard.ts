import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NormalGuard implements CanActivate {
  constructor(private router:Router ){}
  canActivate() {​
    if(sessionStorage.getItem('login')==="normal"){
      return true;​
    }
    else if (sessionStorage.getItem('login')==="admin"){
      this.router.navigateByUrl('/Home');
      return false;
    }
    else{
      this.router.navigateByUrl('/Login');
      return false;
    }
  }
}
