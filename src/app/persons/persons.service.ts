import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  personChanged = new Subject<string[]>();

  private persons: string[] = ['Donald','Mickey','Teacher'];

  constructor() { }

  getPersons() {
    this.personChanged.next(this.persons);
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
