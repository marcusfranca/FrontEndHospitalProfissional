import { Profissional } from './../../../model/Profissional';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfissionalService } from 'src/app/service/profissional.service';
import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/service/hospital.service';
import { Hospital } from 'src/app/model/Hospital';

@Component({
  selector: 'app-list-relacionamento',
  templateUrl: './list-relacionamento.component.html',
  styleUrls: ['./list-relacionamento.component.scss']
})
export class ListRelacionamentoComponent implements OnInit {

  profissionais: Profissional[]

  profissional: Profissional

  constructor(private serviceProfissonal: ProfissionalService, private route: Router,
    private hospitalService: HospitalService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.listaProfissional()
  }

  listaProfissional() {
    this.serviceProfissonal.getList().subscribe(reponse => {
      this.profissionais = reponse.content.map(profissional => Profissional.fromDTO(profissional))
    })
  }
  navigatoToCreate() {
    this.route.navigateByUrl(`relacionamentos/create`)
  }

  editarProfissional(profissional: Profissional) {
    this.route.navigateByUrl(`relacionamentos/update/${profissional.id}`)
  }

  deletarProfissional(profissional: Profissional) {
    this.serviceProfissonal.deleteByid(profissional.id).subscribe(() => {
      this.listaProfissional();
    })
  }
}
