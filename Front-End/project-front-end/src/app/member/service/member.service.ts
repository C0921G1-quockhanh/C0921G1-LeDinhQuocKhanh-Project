import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Member} from "../model/member";

const JSON_URL = `${environment.jsonUrl}`;

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  //DI HttpClient - call web service
  constructor(private http: HttpClient) { }

  //data member-list
  getAllMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(JSON_URL + '/members');
  }

}