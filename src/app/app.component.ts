import { Component } from '@angular/core';
import { PersonService } from "./services/person.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DF App is Working now!';
  people;
  counter: number;

  constructor(private personService: PersonService) {
    this.people = personService.getPeople();
 }

editRecord() {
  alert("This record will be Edited!");
};

deleteRecord() 
{
  alert("This record will be Deleted!");
}

}