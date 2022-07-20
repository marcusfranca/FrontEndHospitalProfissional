import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CreateRelacionamentosComponent } from './create-relacionamentos/create-relacionamentos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListRelacionamentoComponent } from './list-relacionamento/list-relacionamento.component';
import { EditRelacionamentoComponent } from './edit-relacionamento/edit-relacionamento.component';


@NgModule({
    declarations: [
        CreateRelacionamentosComponent,
        ListRelacionamentoComponent,
        EditRelacionamentoComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class Relacionamento { }