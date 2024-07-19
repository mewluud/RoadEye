import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from '../report.service';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements AfterViewInit {
  @ViewChild(MapComponent) mapComponent!: MapComponent;
  selectedCategory: string | null = null;
  selectedSubCategory: string | null = null;

  accidentForm: FormGroup;
  pathHoleForm: FormGroup;
  animalsForm: FormGroup;
  thirdPartiesForm: FormGroup;
  meForm: FormGroup;

  ngAfterViewInit(): void {
    // Initialize the map once the view has been initialized
    this.mapComponent.initializeMap();
  }

  constructor(private fb: FormBuilder, private reportService: ReportService) {
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
    this.meForm = this.fb.group({
      registrationNumber: ['', Validators.required],
      description: ['', Validators.required],
      isInjured: ['', Validators.required],
      hasPassenger: ['', Validators.required],
      passengerCount: ['', Validators.required],
      isPassengerInjured: ['', Validators.required]
    })
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

  onSubmitReport() {
    const location = this.mapComponent.getLocation();
    const currentTime = new Date().toISOString();

    const completeReport = {
      location: location ? `${location.lat}, ${location.lng}` : '',
      timestamp: currentTime,

    };

    this.reportService.submitReport(completeReport.location, completeReport.timestamp, completeReport).subscribe(
        response => {
          console.log('Report submitted successfully:', response);
          // Handle successful submission
        },
        error => {
          console.error('Error submitting report:', error);
          // Handle error
        }
    );
  }
}
