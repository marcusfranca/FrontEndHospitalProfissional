
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HospitalCreateComponent } from './hospital-create/hospital-create.component';



@NgModule({
  declarations: [
    HospitalListComponent,
    HospitalCreateComponent
  ],
  imports: [
    CommonModule,
    SharedModule // importando os pacotes que foi importados(angular e primeNg) no sharedModule
  ]
})
export class HospitalCrudModule { }
