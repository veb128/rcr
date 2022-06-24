import { ThisReceiver } from "@angular/compiler";
import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-schedule-entry',
    templateUrl: 'schedule-entry.component.html'
})
export class ScheduleEntryComponent {
    
    @Input() time: string = '9:00 - 9:15';
    checkedIn: boolean;
    checkedOut: boolean;
    checkedInAt: Date = new Date();
    checkedOutAt: Date = new Date();
    name: string = '';

    entryForm = new FormGroup( {
        name: new FormControl(),
        checkedIn: new FormControl(),
        checkedOut: new FormControl()
    });

    
    constructor() {
        this.checkedIn = false;
        this.checkedOut = false;
        
    }


    onCheckedIn(): void {
        this.checkedInAt = new Date();
        this.checkedIn = this.entryForm.controls['checkedIn'].value;
    }

    onCheckedOut(): void {
        this.checkedOutAt = new Date();
        this.checkedOut = this.entryForm.controls['checkedOut'].value;
        debugger;
    }

    onSaveEntry() {
        this.name = this.entryForm.controls['name'].value.trim();
        debugger;
    }

}