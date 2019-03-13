export interface Response {
    nome?: string,
    endereco?: {
        logradouro?: string,
        bairro?: string,
        localidade?: string,
        uf?: string
    }
    per_capita?: number
}