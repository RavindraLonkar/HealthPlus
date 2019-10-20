import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {MatDialog} from '@angular/material';
import {ImageCropperDialogComponent} from './image-cropper-dialog.component';

@Injectable()
export class ImageCropperService {
  fileName: string;
  fileType: string;
  base64Data: string;

  constructor(public dialog: MatDialog) { }
  openDialog(): Observable<any> {
    const dialogRef = this.dialog.open(ImageCropperDialogComponent, {
      width: '700px',
      height: '450px',
      data: { fileName: this.fileName, fileType: this.fileType, base64Data: this.base64Data }
    });

    return dialogRef.afterClosed();
  }
}
