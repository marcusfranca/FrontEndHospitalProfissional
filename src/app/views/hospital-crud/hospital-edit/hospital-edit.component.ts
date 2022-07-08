import { ActivatedRoute, Router } from '@angular/router';
import { HospitalService } from './../../../service/hospital.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Hospital } from './../../../model/Hospital';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital-edit',
  templateUrl: './hospital-edit.component.html',
  styleUrls: ['./hospital-edit.component.scss']
})
export class HospitalEditComponent implements OnInit {
  hospital!: Hospital;
  form!: FormGroup
  constructor(private service: HospitalService, private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({
      nome: new FormControl(''),
      rua: new FormControl(''),
      bairro: new FormControl(''),
      cidade: new FormControl(''),
      estado: new FormControl(''),
      numero: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.setHospitalByUrl()
  }
  updateHospital() {
    const hospital: Hospital = this.form.value; // type Hospital serve para ele pegar todos os valores sem deixar 1 de fora
    hospital.endereco = {
      rua: this.form.value.rua,
      cidade: this.form.value.cidade,
      bairro: this.form.value.bairro,
      numero: this.form.value.numero,
      estado: this.form.value.estado
    }
    this.service.updateByid(this.NavigateById(), hospital).subscribe(() => {
      console.log(hospital.id)
      this.backToScreenListHospital();
    })
  }

  mandarValoresParaOsCamposDeUpdate(hospital: Hospital) {/*no caso eu tenho nenhum valor no formulario e patch Value atualiza apenas a estrutura do modelo que
   o formulario define que no caso é o nome, rua e etc que estão vindo vazio para os valores deles(nome: marcus, rua: bonsucesso, etc)*/
    this.form.patchValue({ /*form sendo fornecido em forma de objeto por conta do patchValue*/
      nome: hospital.nome,
      rua: hospital.endereco?.rua,
      cidade: hospital.endereco?.cidade,
      bairro: hospital.endereco?.bairro,
      estado: hospital.endereco?.rua,
      numero: hospital.endereco?.numero
    })
  }

  setHospitalByUrl() {
    const id: number = this.NavigateById();
    this.service.getHospitalById(id).subscribe((hospital) => {
      this.mandarValoresParaOsCamposDeUpdate(Hospital.fromDTO(hospital))
    })
  }

  backToScreenListHospital() {
    this.router.navigateByUrl("hospitais")
  }

  NavigateById() {
    return Number(this.route.snapshot.paramMap.get('id'))
  }

}
