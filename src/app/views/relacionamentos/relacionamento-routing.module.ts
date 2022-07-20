import { EditRelacionamentoComponent } from './edit-relacionamento/edit-relacionamento.component';
import { ListRelacionamentoComponent } from './list-relacionamento/list-relacionamento.component';
import { CreateRelacionamentosComponent } from './create-relacionamentos/create-relacionamentos.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: ListRelacionamentoComponent
    },
    {
        path: 'create',
        component: CreateRelacionamentosComponent
    },
    {
        path: 'update/:id',
        component: EditRelacionamentoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)], //ver isso depois
})
export class RelacionamentoModuleRouting { }