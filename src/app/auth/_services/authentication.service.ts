import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Token} from '../../models/Token';
import { ApiResponse } from 'src/app/models/api-response';
import { NgxPermissionsService } from 'ngx-permissions';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Token>;
    public token: Observable<Token>;
    accountBaseUrl = environment.accountBaseUrl;
    loginBaseUrl=environment.loginBaseUrl;
    dataValue:any[];

    constructor(private http: HttpClient,private permissionsService: NgxPermissionsService) {
        this.currentUserSubject = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('token')));
        this.token = this.currentUserSubject.asObservable();
        
    }

    public get currentUserValue(): Token {
        return this.currentUserSubject.value;
    }

    login(username, password) {
      const loginPayload = new HttpParams()
        .set('username', username)
        .set('password', password)
        .set('grant_type', 'password');

      const headers = {
        Authorization: 'Basic ' + btoa('testjwtclientid:XY7kmzoNzl100'),
        'Content-type': 'application/x-www-form-urlencoded'
      };

      return this.http.post<any>(this.accountBaseUrl + '/oauth/token', loginPayload, {headers})
          .pipe(map(token => {
              // login successful if there's a jwt token in the response
              if (token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('token', JSON.stringify(token));
                  this.currentUserSubject.next(token);
              }
              return token;
          }));
    }

    loginUser(username, password):Observable<ApiResponse>{
        const endpoint = '/v1.0/user/';
        return this.http.get<ApiResponse>(this.loginBaseUrl + endpoint+username+'/'+password);
        
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        sessionStorage.removeItem('sessionData');
        this.currentUserSubject.next(null);
        //remove all permissions
        this.permissionsService.flushPermissions();
    }
}
