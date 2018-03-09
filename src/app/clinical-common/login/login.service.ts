import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  constructor(public http:HttpClient) { }

  windowsLogin(){
    debugger;
    return this.http.get('').map((res:Response)=>{
        return res.json();
    })
  }

}
