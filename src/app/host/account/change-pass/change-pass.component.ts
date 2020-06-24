import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormGroup} from '@angular/forms';

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
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  passForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSuccess(){
    // console.log(this.loginForm.value);
    Toast.fire({
      icon: 'success',
      title: 'Change password successfully'
    });
  }

  onFail(){
    // console.log(this.loginForm.value);
    Toast.fire({
      icon: 'error',
      title: 'Change password fail'
    });
  }

}
