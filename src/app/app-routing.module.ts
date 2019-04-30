import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component'
import { RecordComponent } from './components/record/record.component'
import { DataComponent } from './components/data/data.component'

const routes: Routes = [
  {path: '', component: LandingComponent},
  // {path: 'signin', component: SigninComponent},
  // {path: 'signup', component: SignupComponent},
  {path: 'record', component: RecordComponent},
  {path: 'data', component: DataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
