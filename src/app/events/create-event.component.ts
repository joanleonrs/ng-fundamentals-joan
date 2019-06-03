import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/index';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create.event.component.css']
})
export class CreateEventComponent {

  newEvent: any;
  isDirty = true;
  form: FormGroup;

  constructor(private router: Router, private eventService: EventService) {
    this.form = new FormGroup({
      'newEventForm': new FormControl('', this.amountValidator)
    });
  }

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  amountValidator(control: FormControl): {[key: string]: any} {
    const value: string = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return valid ? null : {ssn: true};
  }
}
