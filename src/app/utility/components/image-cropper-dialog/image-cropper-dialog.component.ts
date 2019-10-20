import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ImageCroppedEvent} from 'ngx-image-cropper';
import {ImageCropperDialogData} from './ImageCropperDialogData';

@Component({
  selector: 'app-image-cropper-dialog',
  templateUrl: './image-cropper-dialog.component.html',
  styleUrls: ['./image-cropper-dialog.component.scss']
})
export class ImageCropperDialogComponent implements OnInit {

  imageChangedEvent: any = '';
  base64Data: any = '';
  fileName: any = '';
  fileType: any = '';
  croppedImage: any = '';

  constructor(
    public dialogRef: MatDialogRef<ImageCropperDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImageCropperDialogData) {}

  ngOnInit() {
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    const file = event.target.files[0];
    this.data.fileName = file.name;
    this.data.fileType = file.type;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.data.base64Data = event.base64;
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  loadImageFailed() {
    // show message
  }

}
