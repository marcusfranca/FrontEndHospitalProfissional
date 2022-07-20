import { Profissional } from "../Profissional"

export class HospitalDTO {
    id: number
    nome: string
    rua: string
    bairro: string
    cidade: string
    numero: string
    estado: string
    profissionais: Profissional[]


}