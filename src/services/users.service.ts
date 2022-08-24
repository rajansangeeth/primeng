import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { map, Observable, shareReplay } from "rxjs";
import { APP_CONSTANTS } from "src/constants/app.constants";


@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) {

  }

  getEmail(): Observable<string[]> {
    return this.http.get<string[]>(`${APP_CONSTANTS.API_URL}${APP_CONSTANTS.USER_EMAIL}`)
    .pipe(map((res: any) => res['result']), shareReplay())
  }
}