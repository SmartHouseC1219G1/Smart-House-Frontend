import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) {}
    // Khong su dung
  startUpload(file: File) {
    // The storage path
    const path = `hotel/${Date.now()}_${file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    return this.storage.upload(path, file);
  }

  // getPictureFromUploader(file: File){
  //   const picture: any;
  //   const path = `hotel/${Date.now()}_${file.name}`;

  //   // Reference to storage bucket
  //   const ref = this.storage.ref(path);

  //   return this.storage.upload(path,file).snapshotChanges()
  //   .pipe(
  //     finalize(() => {
  //       ref.getDownloadURL().subscribe((url) => {
  //         picture =
  //       });
  //     })
  //   )
  //   .subscribe();
  // }


}
