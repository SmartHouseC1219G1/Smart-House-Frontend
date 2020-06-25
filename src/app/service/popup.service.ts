import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }
  
  successTimeout(time,title,content){
    let timerInterval;
    Swal.fire({
      title: title,
      html: content,
      timer: time,
      icon: 'success',
      timerProgressBar: true,
      onBeforeOpen: () => {
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
        }, time);
      },
      onClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
      }
    });
  }

  failed(title,content){
    Swal.fire(
      title,
      content,
      'warning'
    );
  }
}
