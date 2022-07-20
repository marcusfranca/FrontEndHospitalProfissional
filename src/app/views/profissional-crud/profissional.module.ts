import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfissionalListComponent } from './profissional-list/profissional-list.component';
import { ProfissionalEditComponent } from './profissional-edit/profissional-edit.component';
import { ProfissionalCreateComponent } from './profissional-create/profissional-create.component';
import { ViewProfissionalComponent } from './view-profissional/view-profissional.component';



@NgModule({
  declarations: [
    ProfissionalListComponent,
    ProfissionalEditComponent,
    ProfissionalCreateComponent,
    ViewProfissionalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProfissionalModule { }
