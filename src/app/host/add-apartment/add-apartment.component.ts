import { UploadService } from '../../service/upload.service';
import { Res } from '../../model/res';
import { Host } from '../../model/host';
import { ApartmentService } from '../../service/apartment.service';
import { GetListService } from '../../service/get-list.service';
import { Province } from '../../model/province';
import { RoomType } from '../../model/roomtype';
import { Apartment } from '../../model/apartment';
import { async } from '@angular/core/testing';
import { Category } from '../../model/category';
import { Picture } from '../../model/picture';
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
    id: 1,
  };

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private fb: FormBuilder,
    private getListService: GetListService,
    private apartmentService: ApartmentService,
    private uploadService: UploadService
  ) {}

  ngOnInit() {
    const arrayResult = this.getList();
    arrayResult.then((resList) => {
      this.categories = resList[0].data;
      this.roomTypes = resList[1].data;
      this.provinces = resList[2].data;
    });

    console.log('pull all category,roomtype,province');

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
      console.log(this.apartmentForm);
      return;
    }
    console.log('saving');
    this.apartment = this.apartmentForm.value
    const uploadArray = [];
    this.files.forEach((file) => {
      uploadArray.push(this.uploadService.startUpload(file));
    });
    console.log('before upload');

    Promise.all(uploadArray)
      .then(async (result) => {
        console.log(result);
        for (let i = 0; i < result.length; i++) {
          const element = result[i];
          const imageUrl = await element.ref.getDownloadURL();
          this.pictures.push({
            imageUrl: this.uploadService.convertToResizeUrl(imageUrl),
          });
          console.log('pass' + i);
        }
        console.log(this.pictures);
      })
      .then(() => {
        this.apartment.pictures = this.pictures;
        console.log(this.apartment);
        this.apartmentService
          .addNewApartment(this.apartment)
          .subscribe((res: Res) => {
            console.log(res);
            if (res.status === 'SUCCESS') alert('success');
            else alert('failed to add new apartment');
          });
      })
      .catch((err) => alert(err))
      .finally(() => {
        this.pictures = [];
        this.apartment = {};
        this.apartmentForm.reset();
      });
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
}
