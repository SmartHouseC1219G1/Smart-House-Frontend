import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSuccess(){
    // console.log(this.loginForm.value);
    Toast.fire({
      icon: 'success',
      title: 'Change in successfully'
    });
  }

  onFail(){
    // console.log(this.loginForm.value);
    Toast.fire({
      icon: 'error',
      title: 'Change in fail'
    });
  }

}
