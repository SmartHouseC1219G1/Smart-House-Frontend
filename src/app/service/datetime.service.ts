import { Injectable } from '@angular/core';
import {
  addMonths,
  addYears,
  differenceInDays,
  differenceInMonths,
  differenceInYears
} from 'date-fns';
@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor() { }
  checkDateTime(diff: string | number | Date): boolean {
    const now = new Date();
    diff = new Date(diff);
    const years = differenceInYears(now, diff);
    if (years > 0) {
      alert('Hôm nay đã là một ngày mới');
      return false;
    }

    const months = differenceInMonths(now, diff);
    if (months > 0) {
      alert('Hôm nay đã là một ngày mới');
      return false;
    }

    const days = differenceInDays(now, diff);
    if (days > 0) {
      alert('Hôm nay đã là một ngày mới');
      return false;
    }
  }
  // @ts-ignore
  checkInOut(dayIn: string | number | Date, dayOut: string | number | Date): boolean {
    dayIn = new Date(dayIn);
    dayOut = new Date(dayOut);
    const years = differenceInYears(dayOut, dayIn);
    if (years > 0) {
      alert(' ngay tra phong cua ban co loi');
      return false;
    }
    const months = differenceInMonths(dayOut, dayIn);
    if (months > 0){
      alert(' ngay tra phong cua ban co loi');
      return false;
    }
    const days = differenceInDays(dayOut, dayIn);
    if (days > 0){
       alert(' ngay tra phong cua ban co loi');
       return false;
     }
  }
}
