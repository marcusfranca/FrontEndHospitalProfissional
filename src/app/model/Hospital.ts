import { HospitalDTO } from './dto/HospitalDTO';
import { Endereco } from './Endereco';
import { Profissional } from './Profissional';
export class Hospital {
  id: number
  nome: string
  endereco: Endereco
  profissionais: Profissional[]

  static withId(id: number): Hospital {
    const hospital = new Hospital();
    hospital.id = id
    return hospital
  }

  static fromDTO(dto: HospitalDTO): Hospital {
    let hospital = new Hospital()
    hospital.id = dto.id
    hospital.nome = dto.nome


    /*  hospital.endereco.bairro = dto.bairro
      hospital.endereco.rua = dto.rua
      hospital.endereco.estado = dto.estado
      hospital.endereco.numero = dto.numero
      hospital.endereco.cidade = dto.cidade*/

    const endereco = new Endereco()
    endereco.bairro = dto.bairro
    endereco.cidade = dto.cidade
    endereco.estado = dto.estado
    endereco.numero = dto.numero
    endereco.rua = dto.rua

    hospital.endereco = endereco

    return hospital
  }

  toDTO(): HospitalDTO {
    const dto = new HospitalDTO()
    dto.id = this.id
    dto.nome = this.nome
    dto.profissionais = this.profissionais
    dto.rua = this.endereco.rua
    dto.numero = this.endereco.numero
    dto.bairro = this.endereco.bairro
    dto.cidade = this.endereco.cidade
    dto.estado = this.endereco.estado



    return dto
  }
}