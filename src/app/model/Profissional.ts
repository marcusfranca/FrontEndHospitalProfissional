import { Endereco } from './Endereco';
import { Hospital } from './Hospital';
export class Profissional {
    id!: number
    nome!: string
    cargo!: string
    endereco!: Endereco

    hospitais!: Hospital[]
}