
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HospitalCreateComponent } from './hospital-create/hospital-create.component';
import { HospitalEditComponent } from './hospital-edit/hospital-edit.component';



@NgModule({
  declarations: [
    HospitalListComponent,
    HospitalCreateComponent,
    HospitalEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule // importando os pacotes que foi importados(angular e primeNg) no sharedModule
  ]
})
export class HospitalCrudModule { }
