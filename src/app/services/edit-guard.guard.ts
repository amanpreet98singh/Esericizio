import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditGuardGuard implements CanActivate {
  constructor(private router:Router ){}
  canActivate() {​
    if(sessionStorage.getItem('login')==="admin"){
      return true;​
    }
    else if (sessionStorage.getItem('login')==="normal"){
      this.router.navigateByUrl('/Home');
      return false;
    }
    else{
      this.router.navigateByUrl('/Login');
      return false;
    }

    
  }
  
}
