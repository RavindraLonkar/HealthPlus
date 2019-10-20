import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../../models/User';
import {environment} from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    accountBaseUrl = environment.accountBaseUrl;

    getAll() {
        return this.http.get<User[]>(this.accountBaseUrl + '/users');
    }

    getById(id: number) {
        return this.http.get(this.accountBaseUrl + '/users/');
    }

    register(user: User) {
        return this.http.post(this.accountBaseUrl + '/users/register', user);
    }

    update(user: User) {
        return this.http.put(this.accountBaseUrl + '/users/${user.id}', user);
    }

    delete(id: number) {
        return this.http.delete(this.accountBaseUrl +  '/users/' + id);
    }

    getByUserName(username: string) {
      const params = new HttpParams()
        .set('username', username)
      return this.http.get(this.accountBaseUrl + '/user/getAllUsers');
    }
}
