import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

   rootURL3 = "https://api.michaelthehomebuyer.ca/"
  //rootURL3 = "http://localhost:3000/"
  rootURL = "https://api.apispreadsheets.com/data/Cl3EWsuFSNE5ddB6/";

  constructor(private http: HttpClient) { }

  contactLeadApi( email: string,  subject: string, message: string): Observable<any> {
    return this.http.post<any>(this.rootURL3 + "email/send", {
      email: email,
      subject: subject,
      message: message
    }).pipe(catchError(this.errorHandler));
  }
  fetchFAQData(): Observable<any> {
    return this.http.get<any>(this.rootURL);
  }
  errorHandler(error: HttpErrorResponse){
    console.error(error);
    return throwError(error.message || "Server Error");
  }
}