import { async } from '@angular/core/testing';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { Picture } from './../../model/picture';
import { Res } from './../../model/res';
import { ApartmentService } from './../../service/apartment.service';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Apartment } from './../../model/apartment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css'],
})
export class ApartmentDetailComponent implements OnInit {
  files: File[] = [];
  pictures: Picture[] = [];
  apartment: Apartment;
  start: Date;
  end: Date;
  constructor(
    private router: Router,
    private storage: AngularFireStorage,
    private apartmentService: ApartmentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // get apartment
    const id = +this.route.snapshot.paramMap.get('id');
    this.apartmentService.getDetailApartmentById(id).subscribe(
      (data: Res) => {
        this.apartment = data.data;
        //get imageurl to files
        let fetches = [];
        for (let i = 0; i < this.apartment.pictures.length; i++) {
          const url = this.apartment.pictures[i].imageUrl;
          fetches.push(this.fetchImage(url));
          console.log(fetches);
        }

        Promise.all(fetches)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      (error) => {
        console.log(error);
        this.apartment = null;
      }
    );
  }

  onSelect(event: { addedFiles: any }) {
    console.log(event);
    this.files.push(...event.addedFiles);
    console.log(this.files);
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
    console.log(this.files);
  }

  fetchImage(url: string) {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    return fetch(proxyUrl + url)
      .then((res) => res.blob()) // Gets the response and returns it as a blob
      .then((blob) => {
        // convert blob to file object
        const file = new File([blob], `image${Date.now()}.jpg`, {
          type: blob.type,
        });
        //push file to files
        this.files.push(file);
        console.log(this.files);
      });
  }

  startUpload(file: File) {
    // The storage path
    const path = `hotel/${Date.now()}_${file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    return this.storage.upload(path, file).snapshotChanges().toPromise();
  }

  async onSave() {
    console.log('saving');

    const uploadArray = [];
    this.files.forEach((file) => {
      uploadArray.push(this.startUpload(file));
    });
    console.log('before upload');

    Promise.all(uploadArray)
      .then(async (result) => {
        console.log(result);
        for (let i = 0; i < result.length; i++) {
          const element = result[i];
          const imageUrl = await element.ref.getDownloadURL();
          this.pictures.push({
            imageUrl: imageUrl,
          });
          console.log('pass' + i);
        }
        console.log(this.pictures);
      })
      .then(() => {
        this.apartmentService
          .updateApartmentPictures(this.apartment.id, this.pictures)
          .subscribe(
            (data) => {
              console.log(data);
              alert("success")
            },
            (err) => console.log(err)
          );
      })
      .catch((err) => alert(err));
  }

  blockOrder(){
    console.log(this.start);
    console.log(this.end);
    
  }
}
