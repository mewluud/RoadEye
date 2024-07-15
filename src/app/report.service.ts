import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private meFormData: any;

  constructor() { }
  saveThirdParties(thirdPartiesData: any) {
    // Implement saving logic for third parties
    console.log('Saving third parties:', thirdPartiesData);
    // Example: save to localStorage
    localStorage.setItem('thirdParties', JSON.stringify(thirdPartiesData));
  }
  saveRoadIssue(issueData: any) {
    // Replace with your actual saving logic, like HTTP calls or storing in a database
    console.log('Saving road issue:', issueData);
    // Example: save to localStorage
    localStorage.setItem('roadIssue', JSON.stringify(issueData));
  }
  saveMeForm(data: any) {
    this.meFormData = data;
  }

  getMeForm() {
    return this.meFormData;
  }
}
