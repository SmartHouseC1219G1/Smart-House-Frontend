import { RoleGuard } from './service/auth/role.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'host',
    loadChildren: () => import('./host/host.module').then(m => m.HostModule),
    canActivate: [RoleGuard],
    data: {
      expectedRole : 'ROLE_HOST'
    }
  },
  {
    path : 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
