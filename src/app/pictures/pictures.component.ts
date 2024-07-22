import { Component } from '@angular/core';
import {ReportService} from "../report.service";

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent {
  selectedFiles: File[] = [];
  uploadProgress: number = 0;
  uploadMessage: string = '';

  constructor(private reportService: ReportService) { }

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.selectedFiles.push(files[i]);
    }
  }

  removeFile(index: number): void {
    this.selectedFiles.splice(index, 1);
  }

  onUpload(): void {
    if (this.selectedFiles.length > 0) {
      // Save pictures in the service
      this.reportService.savePictures(this.selectedFiles);
      this.uploadMessage = 'Pictures saved for report submission!';
    } else {
      this.uploadMessage = 'No files selected!';
    }
  }

  submitPictures(): void {
    const uploadObservables = this.selectedFiles.map(file => this.reportService.uploadPicture(file));
    Promise.all(uploadObservables).then(() => {
      this.uploadMessage = 'All pictures uploaded successfully!';
    }).catch(() => {
      this.uploadMessage = 'Some pictures failed to upload.';
    });
  }
}

