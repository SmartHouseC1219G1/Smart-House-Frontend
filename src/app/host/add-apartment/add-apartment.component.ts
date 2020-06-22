import { Host } from './../../model/host';
import { ApartmentService } from './../../service/apartment.service';
import { GetListService } from './../../service/get-list.service';
import { Province } from './../../model/province';
import { RoomType } from './../../model/roomtype';
import { Apartment } from './../../model/apartment';
import { async } from '@angular/core/testing';
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
import { of } from 'rxjs';

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
    defaultOpen: false,
  };

  categories: Category[] = [];
  roomTypes: RoomType[] = [];
  provinces: Province[] = [];
  apartment: Apartment;
  // For Upload
  pictures: Picture[] = [];
  listUrl: string[] = [];
  apartmentForm: FormGroup;

  files: File[] = [];
  pictureList: Picture[] = [];
  // Hard fix
  hardFixHost: Host = {
    id: 1
  };

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private fb: FormBuilder,
    private getListService: GetListService,
    private apartmentService: ApartmentService
  ) {}

  ngOnInit() {
    const arrayResult = this.getList();
    arrayResult.then((resList) => {
      this.categories = resList[0].data;
      this.roomTypes = resList[1].data;
      this.provinces = resList[2].data;
    });

    console.log('in ra sau khi chay xog race');

    this.apartmentForm = this.fb.group({
      name: ['', Validators.required],
      bathroom: ['', Validators.required],
      bedroom: ['', Validators.required],
      priceByDate: ['', Validators.required],
      description: ['', Validators.required],
      categories: this.fb.control([]),
      address: this.fb.group({
        name: ['', Validators.required],
        provinces: this.fb.group({
          id: ['', Validators.required],
        }),
      }),
      roomTypes: this.fb.control([]),
    });
  }

  async getList() {
    return Promise.all([
      this.getListService.getCategoryList().toPromise(),
      this.getListService.getRoomTypeList().toPromise(),
      this.getListService.getProvinceList().toPromise(),
    ]);
  }

  async onSubmit() {
    if (this.apartmentForm.invalid) {
      alert('invalid input');
      console.log(this.apartmentForm)
      return;
    }
    for (let index = 0; index < this.files.length; index++) {
      const file = this.files[index];
      const waitPlz = await this.startUpload(file).toPromise();
      console.log('pass' + index);
    }
    this.apartment = this.apartmentForm.value;
    this.apartment.pictures = this.pictures;
    // Fix cung host id = 1
    this.apartment.host = this.hardFixHost;
    this.apartmentService.addNewApartment(this.apartment).subscribe(
      (res) => {
        console.log(res);
        alert("Add success")
      },
      (err) => {
        alert("Add failed")
      }
    );
    // make apartment object empty
    this.pictures = [];
    this.apartment = {};
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

  startUpload(file: File) {
    // The storage path
    const path = `hotel/${Date.now()}_${file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    return this.storage
      .upload(path, file)
      .snapshotChanges()
      .pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe((url) => {
            this.pictures.push({
              imageUrl: url,
            });
            console.log(this.pictures);
          });
        })
      );
  }
}
