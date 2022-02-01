import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  personChanged = new Subject<string[]>();

  private persons: string[] = [];  //['Donald','Mickey','Teacher'];

  constructor(private http: HttpClient) { }

  getPersons() {
    this.getPersonsSwapi();
    //this.personChanged.next(this.persons);
  }

  getPersonsSwapi() {
   this.http.get<any>("https://swapi.dev/api/people").
    pipe<any[]>(map(resData => {
      return resData.results;
    })).
    subscribe(results => {
      const res = results.map(c => { return c.name });
      this.persons = res;
      this.personChanged.next(this.persons);
      console.log(res);
    });

  }

  addPerson(name: string) {
    this.persons.push(name);
    this.personChanged.next(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    this.personChanged.next(this.persons);
    //console.log(this.persons);
  }

}
