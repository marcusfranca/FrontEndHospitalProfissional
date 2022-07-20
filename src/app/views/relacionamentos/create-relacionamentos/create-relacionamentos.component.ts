import { HospitalService } from './../../../service/hospital.service';
import { FormGroup, FormControl } from '@angular/forms';

import { ProfissionalService } from './../../../service/profissional.service';
import { Profissional } from './../../../model/Profissional';
import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/model/Hospital';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-relacionamentos',
  templateUrl: './create-relacionamentos.component.html',
  styleUrls: ['./create-relacionamentos.component.scss']
})
export class CreateRelacionamentosComponent implements OnInit {
  profissional: Profissional;
  hospitais: Hospital[] = [];
  form: FormGroup
  selectHospitais: any[] = []; // aqui vai receber i array do hospital e na frente deve fazer um map e pegar o id

  constructor(private service: ProfissionalService, private serviceHospital: HospitalService,
    private route: Router) {
    this.form = new FormGroup({
      nome: new FormControl(''),
      cargo: new FormControl(''),
      hospitais: new FormControl([]),  // array de hopsital
      rua: new FormControl(''),
      bairro: new FormControl(''),
      estado: new FormControl(''),
      numero: new FormControl(''),
      cidade: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.listaDeHospitais()
  }

  createRelacao() {
    this.setHospitais()
    const profissional: Profissional = this.form.value
    profissional.endereco = {
      rua: this.form.value.rua,
      bairro: this.form.value.bairro,
      cidade: this.form.value.cidade,
      numero: this.form.value.numero,
      estado: this.form.value.estado,
    }
    this.service.create(profissional).subscribe(() => {
      this.route.navigateByUrl('relacionamentos')
    })
  }

  listaDeHospitais() {
    this.serviceHospital.getList().subscribe(response => {
      this.hospitais = response.content.map(hospital => Hospital.fromDTO(hospital))
    })
  }

  setHospitais() {
    this.selectHospitais = (this.form.value.hospitais as number[]).map(id => ({ id })) // recebendo o valor do array de hospital e nomiando como array de number e mapeando para pegar um objeto do id
    this.form.patchValue({ // vai pegar os valores do form e alterar, se caso tava vindo um lista de hospital agora vai vim um objeto id
      hospitais: this.selectHospitais // 
    });
  }

  backToScreenList() {
    this.route.navigateByUrl('relacionamentos')
  }

}
