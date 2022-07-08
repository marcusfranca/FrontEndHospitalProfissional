import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'hospitais', /* vai acessar o routing do hospital-crud e assim vai acessar a pagina de lista e criar e tudo que tiver no routing */
    loadChildren: () =>
      import('./views/hospital-crud/hospital-routing.module').then(
        (m) => m.HospitalRoutingModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
