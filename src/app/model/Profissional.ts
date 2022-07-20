import { ProfissionalDTO } from './dto/ProfissionalDTO';
import { Endereco } from './Endereco';
import { Hospital } from './Hospital';
export class Profissional {
  id: number
  nome: string
  cargo: string
  endereco: Endereco
  hospitais: Hospital[]
  hospital: Hospital

  static withId(id: number): Profissional {
    const profissional = new Profissional();
    profissional.id = id
    return profissional
  }

  static fromDTO(dto: ProfissionalDTO): Profissional {
    let profissional = new Profissional()
    profissional.id = dto.id
    profissional.nome = dto.nome
    profissional.cargo = dto.cargo
    profissional.hospitais = dto.hospitais

    /*  profissional.endereco.bairro = dto.bairro
      profissional.endereco.rua = dto.rua
      profissional.endereco.estado = dto.estado
      profissional.endereco.numero = dto.numero
      profissional.endereco.cidade = dto.cidade*/

    let endereco = new Endereco()
    endereco.bairro = dto.bairro
    endereco.cidade = dto.cidade
    endereco.estado = dto.estado
    endereco.numero = dto.numero
    endereco.rua = dto.rua

    profissional.endereco = endereco

    return profissional
  }
  toDTO(): ProfissionalDTO {
    const dto = new ProfissionalDTO()
    dto.id = this.id
    dto.nome = this.nome
    dto.cargo = this.cargo
    dto.hospitais = this.hospitais
    dto.rua = this.endereco.rua
    dto.numero = this.endereco.numero
    dto.bairro = this.endereco.bairro
    dto.cidade = this.endereco.cidade
    dto.estado = this.endereco.estado

    return dto
  }
}