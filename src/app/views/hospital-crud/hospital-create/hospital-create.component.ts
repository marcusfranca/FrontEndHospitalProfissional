
import { Hospital } from './../../../model/Hospital';
import { Router } from '@angular/router';
import { HospitalService } from './../../../service/hospital.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-hospital-create',
  templateUrl: './hospital-create.component.html',
  styleUrls: ['./hospital-create.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class HospitalCreateComponent implements OnInit {
  hospital!: Hospital

  form!: FormGroup


  constructor(private service: HospitalService, private router: Router, private messageService: MessageService) {
    this.form = new FormGroup({
      nome: new FormControl(''),
      telefone: new FormControl(''),
      rua: new FormControl(''),
      numero: new FormControl(''),
      bairro: new FormControl(''),
      cidade: new FormControl(''),
      estado: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  createHospital() {
    /*pegando os valores do atributos pelo FormGroup faz com que eu não precise efetuar um propety binding 
    e informar os valores dos atributos na tela*/
    const hospital: Hospital = this.form.value;
    hospital.endereco = {
      rua: this.form.value.rua,
      bairro: this.form.value.bairro,
      numero: this.form.value.numero,
      cidade: this.form.value.cidade,
      estado: this.form.value.estado,
    };

    this.service.create(hospital).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Hospital Salvo', life: 3000 });
    });
    this.backToScreenListHospital()
  }

  backToScreenListHospital() {
    this.router.navigateByUrl("hospitais")
  }

}

