import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Person } from '../models/person';
 
@Injectable()
export class PersonService {
   constructor(private http: Http) {
   }
 
   getPeople(): Observable<Person[]> {
      return this.http.get("http://peoplecollectionapi.azurewebsites.net/api/people")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}