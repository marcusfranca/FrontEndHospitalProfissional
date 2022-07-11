import { ProfissionalEditComponent } from './profissional-edit/profissional-edit.component';
import { ProfissionalCreateComponent } from './profissional-create/profissional-create.component';
import { ProfissionalListComponent } from './profissional-list/profissional-list.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: ProfissionalListComponent
    },
    {
        path: 'create',
        component: ProfissionalCreateComponent
    },
    {
        path: 'update/:id',
        component: ProfissionalEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)], //ver isso depois
})
export class ProfissionalRoutingModule { }