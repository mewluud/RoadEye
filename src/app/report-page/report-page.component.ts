import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent {
  selectedCategory: string | null = null;
  selectedSubCategory: string | null = null;

  accidentForm: FormGroup;
  pathHoleForm: FormGroup;
  animalsForm: FormGroup;
  thirdPartiesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.accidentForm = this.fb.group({
      location: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.pathHoleForm = this.fb.group({
      location: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.animalsForm = this.fb.group({
      location: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.thirdPartiesForm = this.fb.group({
      involved: ['', Validators.required],
      driverName: [''],
      driverNumber: [''],
      description: ['']
    });
  }


  selectCategory(category: string) {
    this.selectedCategory = category;
    this.selectedSubCategory = null; // Reset subcategory when a new category is selected
  }

  selectSubCategory(subCategory: string) {
    this.selectedSubCategory = subCategory;
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      // Handle form submission, e.g., send data to the backend
    }
  }
  onInvolvedChange() {
    const involved = this.thirdPartiesForm.get('involved')?.value;
    if (involved === 'anotherVehicle') {
      this.thirdPartiesForm.get('driverName')?.setValidators([Validators.required]);
      this.thirdPartiesForm.get('driverNumber')?.setValidators([Validators.required]);
      this.thirdPartiesForm.get('description')?.setValidators([Validators.required]);
    } else {
      this.thirdPartiesForm.get('driverName')?.clearValidators();
      this.thirdPartiesForm.get('driverNumber')?.clearValidators();
      this.thirdPartiesForm.get('description')?.clearValidators();
    }
    this.thirdPartiesForm.get('driverName')?.updateValueAndValidity();
    this.thirdPartiesForm.get('driverNumber')?.updateValueAndValidity();
    this.thirdPartiesForm.get('description')?.updateValueAndValidity();
  }

  isFormValid() {
    switch (this.selectedSubCategory) {
      case 'accident':
        return this.accidentForm.valid;
      case 'pathHole':
        return this.pathHoleForm.valid;
      case 'animals':
        return this.animalsForm.valid;
      default:
        return false;
    }
  }
}
