import { Hospital } from './../../../model/Hospital';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Profissional } from './../../../model/Profissional';
import { ProfissionalService } from './../../../service/profissional.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profissional-create',
  templateUrl: './profissional-create.component.html',
  styleUrls: ['./profissional-create.component.scss']
})
export class ProfissionalCreateComponent implements OnInit {
  profissional!: Profissional

  form!: FormGroup

  constructor(private service: ProfissionalService, private router: Router) {
    this.form = new FormGroup({
      nome: new FormControl(''),
      cargo: new FormControl(''),
      cidade: new FormControl(''),
      numero: new FormControl(''),
      bairro: new FormControl(''),
      estado: new FormControl(''),
      rua: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  createProfissional() {
    const profissional: Profissional = this.form.value //seria this.form.value.nome e .cargo
    profissional.endereco = {//como tenho que acessar a classe endereço pegar os valores dos atributos e ela já está na classe profissional é só da profissional.endereco que vou ter acesso aos valores
      rua: this.form.value.rua,
      bairro: this.form.value.bairro,
      numero: this.form.value.numero,
      cidade: this.form.value.cidade,
      estado: this.form.value.estado,
    };

    this.service.create(profissional).subscribe(() => {
      this.backToScreenListProfissional();
    })

  }
  backToScreenListProfissional() {
    this.router.navigateByUrl("profissionais")
  }
}
