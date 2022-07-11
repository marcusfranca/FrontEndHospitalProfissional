import { Endereco } from './../../../model/Endereco';
import { FormControl, FormGroup } from '@angular/forms';
import { Profissional } from './../../../model/Profissional';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProfissionalService } from './../../../service/profissional.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profissional-edit',
  templateUrl: './profissional-edit.component.html',
  styleUrls: ['./profissional-edit.component.scss']
})
export class ProfissionalEditComponent implements OnInit {

  profissional!: Profissional
  form!: FormGroup

  constructor(private service: ProfissionalService, private router: Router, private route: ActivatedRoute) {
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
    this.setProfissionalByUrl();
  }

  updateProfissional() {
    const profissional: Profissional = this.form.value; // ver o conceito de let e cosnt e var
    profissional.endereco = {
      rua: this.form.value.rua,
      bairro: this.form.value.bairro,
      numero: this.form.value.numero,
      cidade: this.form.value.cidade,
      estado: this.form.value.estado,
    }
    this.service.updateByid(this.url(), profissional).subscribe(() => {
      this.backToScreenListProfissional();
    }
    )
  }

  mandarValoresParaOsCamposDeUpdate(profissional: Profissional) {
    this.form.patchValue({//evento do form, no caso aqui seria o patchValue vai pegar os valores que foi alterado, nome e etc.. quando for puxar pelo id desse objeto ele vai trazer os valores que foi mudado substituindo qualquer propriedade definida no objeto que foram alteradas no modelo de formulário.
      nome: profissional.nome, /*tava dando this.profissional, e por conta disso não tava pegando o profissional do parametro, tava pegando o da classe q ta como profissional!: Profissional*/
      cargo: profissional.cargo,
      rua: profissional.endereco?.rua,
      bairro: profissional.endereco?.bairro,
      cidade: profissional.endereco?.cidade,
      estado: profissional.endereco?.estado,
      numero: profissional.endereco?.numero
    })
  }

  setProfissionalByUrl() {
    const id: number = this.url();
    this.service.getById(id).subscribe((profissional) => {
      this.mandarValoresParaOsCamposDeUpdate(Profissional.fromDTO(profissional))
    });
  }

  backToScreenListProfissional() {
    this.router.navigateByUrl("profissionais")
  }

  url() {
    return Number(this.route.snapshot.paramMap.get('id'))
  }

}
