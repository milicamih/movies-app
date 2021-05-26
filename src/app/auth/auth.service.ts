import {Injectable} from '@angular/core';
import {User} from "./sing-in/sing-in.component";
import {Login} from "./login/login.component";
import {Router} from "@angular/router";
import {SnackbarService} from "../shared/services/snackbar.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = null;

  constructor(private router: Router,
              public snackbar: SnackbarService) {
  }


  getCurrentUser(): User {
    return this.currentUser;
  }

  singIn(user: User) {
    const users = this.getUsers();
    if (users.find(item => item.email === user.email)) {
      this.snackbar.openSnackBar('This mail already exist');
      return;
    }

    users.push(user);
    this.saveUsersData(users);
    this.currentUser = user;
    this.router.navigate(['./movies'])
  }

  login(user: Login) {
    debugger
    const users = this.getUsers();

    const existingUser = users.find(item =>
      item.email === user.email && item.password === user.password
    )

    if (!existingUser) {
      this.snackbar.openSnackBar('Credentials are not valid');
    }

    this.currentUser = existingUser;
    this.router.navigate(['./movies']);
  }

  private saveUsersData(users: User[]) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  private getUsers(): User[] {
    const usersString = localStorage.getItem('users');
    if (!usersString) {
      return [];
    }

    try {
      const users = JSON.parse(usersString);
      return users;
    } catch (exception) {
      console.log('Users data are not valid: ', exception);
      return [];
    }

  }
}
