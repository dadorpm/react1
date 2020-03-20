import React from 'react';
import ProdutoService from '../../app/ProdutoService'
export default class ConsultaProdutos extends React.Component{
    constructor(){
        super();
        this.service = new ProdutoService();
    }
    state = {
        produto : []
    };
    componentDidMount(){
        this.setState({produto : this.service.ler() })
    }
    render(){
        return(
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Consulta de Produtos</h4>
                </div>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>SKU</th>
                                <th>Preço</th>
                                <th>Fornecedor</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.produto.map((produto,index) => {
                                    return(
                                        <tr key={index}>
                                            <th>{produto.nome}</th>
                                            <th>{produto.sku}</th>
                                            <th>{produto.preco}</th>
                                            <th>{produto.fornecedor}</th>
                                            <th></th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}