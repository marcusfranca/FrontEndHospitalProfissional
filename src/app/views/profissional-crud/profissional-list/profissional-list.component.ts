import { Hospital } from './../../../model/Hospital';
import { map } from 'rxjs';
import { Profissional } from './../../../model/Profissional';
import { Route, Router } from '@angular/router';
import { ProfissionalService } from './../../../service/profissional.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profissional-list',
  templateUrl: './profissional-list.component.html',
  styleUrls: ['./profissional-list.component.scss']
})
export class ProfissionalListComponent implements OnInit {

  constructor(private service: ProfissionalService, private router: Router) { }
  profissionais: Profissional[] = []
  profissional!: Profissional;

  ngOnInit(): void {
    this.profissionalList();
  }

  profissionalList(page = 0, size = 10) {
    this.service.getList().subscribe(response => {
      this.profissionais = response.content.map(profissional => Profissional.fromDTO(profissional)) // esse content é por conta do page (content: T[]) lista de array ai eu mapeo para o dto
    })
  }
  editProfissional(profissional: Profissional) {
    this.router.navigateByUrl(`profissionais/update/${profissional.id}`)
  }

  deleteProfissional(profissional: Profissional) {
    this.service.deleteByid(profissional.id).subscribe(() => {
      console.log(profissional.nome);
    })
  }
  views(profissional: Profissional) {
    this.router.navigateByUrl(`profissionais/relacionamento/${profissional.id}`)
  }

  navigatoToCreate() {
    this.router.navigateByUrl("profissionais/create")
  }
}
