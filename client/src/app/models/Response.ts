export interface Response {
    nome?: string,
    endereco?: {
        cep?: string,
        logradouro?: string,
        bairro?: string,
        localidade?: string,
        uf?: string
        ibge?: number,
        complemento?: string
    }
    per_capita?: number
}