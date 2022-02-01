import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit, OnDestroy {

  subPerson! : Subscription;
  personList!: string[];

  constructor(private personsService: PersonsService) { }

  ngOnInit(): void {
    this.subPerson = this.personsService.personChanged.subscribe(persons => {
      this.personList = persons;
    });
    this.personsService.getPersons();
  }

  onRemovePerson(name: string) {
    this.personsService.removePerson(name);
  }

  ngOnDestroy() {
    this.subPerson.unsubscribe();
  }

}
