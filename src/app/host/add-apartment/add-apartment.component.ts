import { Category } from './../../model/category';
import { Picture } from './../../model/picture';
import { Component, OnInit } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css'],
})
export class AddApartmentComponent implements OnInit {
  settings: IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    enableCheckAll: true,
    selectAllText: 'Select all',
    unSelectAllText: 'Unselect all',
    allowSearchFilter: true,
    limitSelection: -1,
    clearSearchFilter: true,
    maxHeight: 197,
    itemsShowLimit: 10,
    searchPlaceholderText: 'Search',
    noDataAvailablePlaceholderText: 'No value',
    closeDropDownOnSelection: false,
    showSelectedItemsAtTop: false,
    defaultOpen: false  
  }
  categories = [] ;
  roomTypes = [];

  // For Upload
  listUrl: string[] = [];
  apartmentForm: FormGroup;

  
  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.categories = [
      { id: 1, name: 'Loai 1' },
      { id: 2, name: 'Loai 2' },
      { id: 3, name: 'Loai 3' },
      { id: 4, name: 'Loai 4' },
      { id: 5, name: 'Loai 5' }
    ];

    this.roomTypes = [
      { id: 1, name: 'phong 1'},
      { id: 2, name: 'phong 2'},
      { id: 3, name: 'phong 3'},
    ]
    // setting and support i18n
  

    this.apartmentForm = this.fb.group({
      name: ['', Validators.required],
      bathroom: ['', Validators.required],
      bedroom: ['', Validators.required],
      priceByDate: ['', Validators.required],
      description: ['', Validators.required],
      categories: this.fb.control([]),
      address: this.fb.group({
        name: ['', Validators.required],
        province: this.fb.group({
          id: ['', Validators.required],
        }),
      }),
      roomTypes: this.fb.control([])
    });

    
  }

  files: File[] = [];
  pictureList: Picture[] = [];

  onSubmit() {
    console.log(this.apartmentForm.value)
  }

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
    this.storage
      .upload(path, file)
      .snapshotChanges()
      .pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe((url) => {
            this.listUrl.push(url);
            console.log(this.listUrl);
          });
        })
      )
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );

    console.log(this.listUrl);
  }
}
