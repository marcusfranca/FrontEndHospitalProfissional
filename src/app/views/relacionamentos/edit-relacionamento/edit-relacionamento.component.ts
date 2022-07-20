import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Hospital } from './../../../model/Hospital';
import { Profissional } from './../../../model/Profissional';
import { HospitalService } from './../../../service/hospital.service';
import { ProfissionalService } from './../../../service/profissional.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-relacionamento',
  templateUrl: './edit-relacionamento.component.html',
  styleUrls: ['./edit-relacionamento.component.scss']
})
export class EditRelacionamentoComponent implements OnInit {

  profissional: Profissional
  hospitais: Hospital[] = [];
  form: FormGroup
  selectHospital: any[] = [];

  constructor(private serviceProfissional: ProfissionalService, private serviceHospital: HospitalService,
    private route: ActivatedRoute, private router: Router) {
    this.profissional = new Profissional();
    this.setProfissionalByUrlParam().finally(() => {
      this.form = new FormGroup({
        nome: new FormControl(this.profissional.nome || ''),
        cargo: new FormControl(this.profissional.cargo || ''),
        rua: new FormControl(this.profissional.endereco.rua || ''),
        cidade: new FormControl(this.profissional.endereco.numero || ''),
        estado: new FormControl(this.profissional.endereco.bairro || ''),
        numero: new FormControl(this.profissional.endereco.cidade || ''),
        bairro: new FormControl(this.profissional.endereco.estado || ''),
        hospitais: new FormControl(this.profissional.hospitais.map(hospital => hospital.id))//formControl Nome já vai receber o checkbox marcado pois o hospitais ja ta recebendo o id do hospital que foi relacionado
      })
    });
  }

  ngOnInit(): void {
    this.listaDeHospitais()
  }

  editarProfissional() {
    const profissional: Profissional = this.form.value;
    profissional.hospitais = this.form.value.hospitais.map(id => Hospital.withId(id))
    profissional.endereco =
    {
      rua: this.form.value.rua,
      bairro: this.form.value.bairro,
      estado: this.form.value.estado,
      cidade: this.form.value.cidade,
      numero: this.form.value.numero,
    }
    this.serviceProfissional.updateByid(this.getIdFromUrl(), profissional).subscribe(() => {
      this.router.navigateByUrl("relacionamentos")
    });
  }

  setFormProfissional(profissional: Profissional) {
    this.profissional = profissional;
  }

  async setProfissionalByUrlParam() {
    const id: number = this.getIdFromUrl();
    const profissional: Profissional = Profissional.fromDTO(await this.serviceProfissional.getById(id).toPromise())
    this.setFormProfissional(profissional)
    this.form.patchValue({
      hospitais: profissional.hospitais.map(hospital => hospital.id)
    }
    )

    // this.profissionalService.getProfissionalById(id).subscribe(
    // (profissional) => {
    //    this.setFormProfissional(Profissional.fromDTO(profissional))
    //   });
  }

  listaDeHospitais() {
    this.serviceHospital.getList().subscribe(response => {
      this.hospitais = response.content.map(hospital => Hospital.fromDTO(hospital))
    });
  }

  setHospitais() {
    this.form.patchValue({//vai substituir o valor que já estava antes no form e colocar esse novo valor
      hospitais: this.selectHospital
    });
  }

  getIdFromUrl(): number {
    return Number(this.route.snapshot.paramMap.get('id'));
  }

  backToScreenList() {
    this.router.navigateByUrl('relacionamentos')
  }

}