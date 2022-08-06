import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-property-dialog-box',
  templateUrl: './property-dialog-box.component.html',
  styleUrls: ['./property-dialog-box.component.scss']
})
export class PropertyDialogBoxComponent implements OnInit {
  propertyFormGroup: FormGroup;
  constructor(public service: ServiceService, public fb: FormBuilder, private dialogRef: MatDialogRef<PropertyDialogBoxComponent>) {
    this.propertyFormGroup = this.fb.group({
      name: [''],
      description: [''],
      size: ['']
    })
  }

  ngOnInit(): void {
  }

  onSave() {
    const data = {
      name: this.propertyFormGroup.get('name')?.value,
      description: this.propertyFormGroup.get('description')?.value,
      size: this.propertyFormGroup.get('size')?.value
    }
    this.service.addProperty(data);
    this.service.refreshgridSubject.next(data);
    this.propertyFormGroup.reset();
    this.dialogRef.close();
  }
}
