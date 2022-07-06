import { Endereco } from './Endereco';
import { Profissional } from './Profissional';
export class Hospital {
    id!: number
    nome!: string
    endereco!: Endereco

    profissionais!: Profissional[]
}