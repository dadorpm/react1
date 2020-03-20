const PRODUTO = '_PRODUTO';
export function ErroValidacao(errors){
    this.errors = errors;
}
export default class ProdutoService{
    validar = (produto) => {
        const errors = [];
        if(!produto.nome){
            errors.push("Campo Nome é obrigatório")
        }
        if(!produto.sku){
            errors.push("Campo SKU é obrigatório")
        }
        if(!produto.preco || produto.preco<=0){
            errors.push("Campo Preço é obrigatório e tem que ser maior que zero")
        }
        if(!produto.fornecedor){
            errors.push("Campo Fornecedor é obrigatório")
        }
        if(errors.length > 0){
            throw new ErroValidacao(errors);
        }
    }
    salvar = (produto) => {
        this.validar(produto);
        let produtos = localStorage.getItem(PRODUTO);
        if(!produtos){
            produtos = [];
        }else{
            produtos = JSON.parse(produtos);
        }

        produtos.push(produto);
        localStorage.setItem(PRODUTO, JSON.stringify(produtos));


    }
    ler = () => {
        const produtos = localStorage.getItem(PRODUTO);
        return  JSON.parse(produtos);

    }
}