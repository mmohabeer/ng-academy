import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  private persons: string[] = ['Donald','Mickey','Teacher'];

  constructor() { }

  getPersons() {
    return this.persons;
  }

  addPerson(name: string) {
    this.persons.push(name);
  }

}
