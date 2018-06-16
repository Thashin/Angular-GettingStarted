import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate{

  constructor(private _router: Router) { }
canActivate(route: ActivatedRouteSnapshot): boolean{
    let id = +route.url[1].path;
    console.log(id);
    if (isNaN(id) || id < 1)
    {
      alert("Invalid product Id");
      this._router.navigate(['/products']);
      return false;

    };
    return true;
}
}
