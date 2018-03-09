import { Component, OnInit } from '@angular/core';

import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginService,private router:Router) { }

  ngOnInit() {
    // this.service.windowsLogin().subscribe((data)=>{
    //   console.log(data);
    // });
    this.router.navigateByUrl('dashboard');
  }

}
