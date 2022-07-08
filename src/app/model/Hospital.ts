import { HospitalDTO } from './dto/HospitalDTO';
import { Endereco } from './Endereco';
import { Profissional } from './Profissional';
export class Hospital {
  id!: number
  nome!: string
  endereco!: Endereco
  profissionais!: Profissional[]


  static fromDTO(dto: HospitalDTO): Hospital {
    let hospital = new Hospital()
    hospital.id = dto.id
    hospital.nome = dto.nome

    /*  hospital.endereco.bairro = dto.bairro
      hospital.endereco.rua = dto.rua
      hospital.endereco.estado = dto.estado
      hospital.endereco.numero = dto.numero
      hospital.endereco.cidade = dto.cidade*/

    let endereco = new Endereco()
    endereco.bairro = dto.bairro
    endereco.cidade = dto.cidade
    endereco.estado = dto.estado
    endereco.numero = dto.numero
    endereco.rua = dto.rua

    hospital.endereco = endereco

    return hospital
  }
}