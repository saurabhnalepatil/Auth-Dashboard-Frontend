import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { SignIn, SignUp } from '../models/master-model';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceTsService {
  endPointURL: string = environment.endPointURL;
  signUpEndpoint: string = 'user';
  signInEndpoint: string = 'login';


  constructor(private http: HttpClient) { }

  registerUser(userData: SignUp) {
    debugger;
    const url = `${this.endPointURL}${this.signUpEndpoint}`;
    return this.http.post(url, userData);
  }

  loginUser(email: string, password: string) {
    debugger;
    const url = `${this.endPointURL}${this.signInEndpoint}`;
    return this.http.post(url, { email, password });
  }

}
