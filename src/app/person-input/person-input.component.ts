import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PersonsService } from '../persons/persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {

  enteredPersonName = '';

  constructor(private personsService: PersonsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreatePerson() {
    console.log('Created a person: ' + this.enteredPersonName);
    this.personsService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
    this.router.navigate(["/"]);
  }

}
