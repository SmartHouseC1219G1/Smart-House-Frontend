import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize, tap } from 'rxjs/operators';

interface Image{
  id?: number;
  url: string;
}
@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit {

  // For Upload
  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  listUrl: string[] = []; 

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  ngOnInit(): void {
  }

  files: File[] = [];
  imageList: Image[] = [];
 
onSelect(event) {
  console.log(event);
  this.files.push(...event.addedFiles);
  this.startUpload(event.addedFiles[0]);
}
 
onRemove(event) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

startUpload(file: File) {
  // The storage path
  const path = `hotel/${Date.now()}_${file.name}`;

  // Reference to storage bucket
  const ref = this.storage.ref(path);

  // The main task
  this.storage.upload(path, file).snapshotChanges().pipe(
    finalize(() => {
        ref.getDownloadURL().subscribe(url => {
          this.listUrl.push(url);
          console.log(this.listUrl)
        })
    })
  ).subscribe(res => {
    console.log(res)
  },error => {
    console.log(error)
  });

  console.log(this.listUrl);
}
}
