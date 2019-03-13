import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFormComponent } from './components/user-form/user-form.component';
import { UserModalComponent } from './components/user-modal/user-modal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/kukac',
    pathMatch: 'full'
  },
  {
    path: 'kukac',
    component: UserFormComponent
  },
  {
    path: 'kukac/result',
    component: UserModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
