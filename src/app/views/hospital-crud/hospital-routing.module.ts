import { HospitalEditComponent } from './hospital-edit/hospital-edit.component';
import { HospitalCreateComponent } from './hospital-create/hospital-create.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*sistema de routing do hospital-crud, tudo que for pagina do hospital vai ser jogado o path aqui para acessar a pagina*/
const routes: Routes = [
    {
        path: '',
        component: HospitalListComponent
    },
    {
        path: 'create',
        component: HospitalCreateComponent
    },
    {
        path: 'update/:id',
        component: HospitalEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)], //ver isso depois
})
export class HospitalRoutingModule { }