import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	name: String;
	username: String;
	email: String;
	password: String;

  constructor(private validateService: ValidateService,
              private flashMessage: FlashMessagesService,
              private authService: AuthService,
              private router:Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }

    //Required Fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill all fields',{cssClass: 'alert-danger',timeout:3000});
      return false;
    }

    //Valid Email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Invalid email',{cssClass: 'alert-danger',timeout:3000});
      return false;
    }

    //Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
         this.flashMessage.show('You are now registered',{cssClass: 'alert-success',timeout:3000});
         this.router.navigate(['/login']);
      } else{
        this.flashMessage.show('Something went wrong',{cssClass: 'alert-danger',timeout:3000});
         this.router.navigate(['/register']);
      }
    });

  }
}
