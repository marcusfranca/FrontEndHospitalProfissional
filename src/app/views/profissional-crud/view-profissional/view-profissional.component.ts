import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from 'src/app/model/Hospital';
import { Profissional } from 'src/app/model/Profissional';
import { HospitalService } from 'src/app/service/hospital.service';
import { ProfissionalService } from 'src/app/service/profissional.service';

@Component({
  selector: 'app-view-profissional',
  templateUrl: './view-profissional.component.html',
  styleUrls: ['./view-profissional.component.scss']
})
export class ViewProfissionalComponent implements OnInit {

  profissional: Profissional
  hospitais: Hospital[] = [];
  hospital: Hospital;
  hospitaisSelecionados: Number[] = [];

  constructor(
    private router: Router,
    private profissionalService: ProfissionalService,
    private hospitalService: HospitalService,
    private route: ActivatedRoute,
  ) {

  }

  async ngOnInit() {
    this.profissional = new Profissional();
    console.log(this.hospital.id)
    await this.setProfissionalByUrlParam();
    this.getHospitais();
    // this.getHospitaisSelecionados();
    console.log(this.profissional)
  }
  async setProfissionalByUrlParam() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.profissional = Profissional.fromDTO(
      await this.profissionalService.getById(id).toPromise()
    )
    //this.profissionalService.getProfissionalById(id).subscribe((resp) => this.profissional = Profissional.fromDTO(resp))

  }
  getHospitais() {
    this.hospitalService.getList().subscribe(response => {
      this.hospitais = response.content.map(hospital => Hospital.fromDTO(hospital));
    })
  }
  /*erro é o que o profissional vai criar essa relação e o view vai só mostrar essa relação, como profissional não criou essa relação o id não existe*/
  getHospitaisSelecionados() {
    //console.log(this.profissional)
    //console.log(this.profissional.hospitais.map(hospital => hospital.id));
    //this.hospitaisSelecionados = this.profissional.hospitais.map(hospital => hospital.id);

    //console.log(this.hospitaisSelecionados)
    //console.log(this.profissional.hospitais)
    //console.log(this.hospitais)
  }

  inicio() {
    this.router.navigateByUrl('profissionais');
  }

}
