import { Hospital } from "../Hospital"

export class ProfissionalDTO {
    id: number
    nome: string
    cargo: string
    rua: string
    bairro: string
    cidade: string
    numero: string
    estado: string
    hospitais: Hospital[]
}