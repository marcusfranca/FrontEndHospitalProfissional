import { map } from 'rxjs';
import { Hospital } from './../../../model/Hospital';
import { Router } from '@angular/router';
import { HospitalService } from './../../../service/hospital.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hospital-create',
  templateUrl: './hospital-create.component.html',
  styleUrls: ['./hospital-create.component.scss']
})
export class HospitalCreateComponent implements OnInit {
  hospital!: Hospital
  form!: FormGroup

  constructor(private service: HospitalService, private router: Router) {
    this.hospital = new Hospital();
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
    const hospital: Hospital = this.form.value;
    hospital.endereco = {
      rua: this.form.value.rua,
      bairro: this.form.value.bairro,
      numero: this.form.value.numero,
      cidade: this.form.value.cidade,
      estado: this.form.value.estado,
    };

    this.service.create(hospital).subscribe(() => {
      console.log("Criando Um Hospital")
      this.router.navigateByUrl("hospitais")
    })
  }
  backToScreenCreate() {
    this.router.navigateByUrl("hospitais")
  }

}

