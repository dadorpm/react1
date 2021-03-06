import React from 'react';
import ProdutoService from '../../app/ProdutoService';

const estadoInicial = {
    nome : '',
    sku : '',
    descricao : '',
    preco : 0,
    fornecedor : '',
    sucesso : false,
    error : [],
    atualizacao: false
}
export default class CadastroProduto extends React.Component{
    state = estadoInicial;
    constructor(){
        super();
        this.service = new ProdutoService();

    }
    onChange = (event) => {
        const valor = event.target.value;
        const campo = event.target.name;
        this.setState({
            [campo]:valor
        })
    }

    onSubmit = (event) => {
        const produto = {
            nome : this.state.nome,
            sku : this.state.sku,
            descricao : this.state.descricao,
            preco : this.state.preco,
            fornecedor : this.state.fornecedor
        }
        try{
            this.service.salvar(produto);
            this.setState(estadoInicial);
            this.setState({sucesso : true});
        }catch(erro){
            const errors = erro.errors;
            this.setState({ error : errors})
        }
    }
    limpar = (event) => {
        this.setState(estadoInicial)
    }
    componentDidMount(){
        const sku = this.props.match.params.sku;
        if(sku){
            const produto = this.service.ler().filter(p => p.sku === sku);
            if(produto.length === 1){
                const resultado = produto[0];
                this.setState({...resultado, atualizacao : true})
            }

        }
    }
    render(){
        return(
            <div className="card">
                <div className="card-header">
                     <h4 className="card-title">{this.state.atualizacao?"Atualizando":"Cadastro"} de Produto</h4>
                </div>
                <div className="card-body">
                    {
                        this.state.sucesso &&
                        <div className="alert alert-dismissible alert-success">
                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                            <strong>Bem feito!</strong> Cadastro feito com sucesso.
                        </div>
                    }
                    {this.state.error.length>0 &&
                        this.state.error.map(msg => {
                            return(
                                <div className="alert alert-dismissible alert-danger">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>Erro!</strong> {msg}
                                </div>
                                )
                        })
                        
                    }
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Produto</label>
                                <input name="nome" onChange={this.onChange} className="form-control" value={this.state.nome} type="text"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                    <label>SKU</label>
                                    <input name="sku" disabled={this.state.atualizacao?"disabled":""} onChange={this.onChange} className="form-control" value={this.state.sku} type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição</label>
                                <textarea name="descricao" onChange={this.onChange} className="form-control" value={this.state.descricao} />
                            </div>
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço</label>
                                <input name="preco" onChange={this.onChange} className="form-control" type="text" value={this.state.preco}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                    <label>Fornecedor</label>
                                    <input name="fornecedor" onChange={this.onChange} className="form-control" type="text" value={this.state.fornecedor}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <button className="btn btn-success" onClick={this.onSubmit}>{this.state.atualizacao?"Atualizar":"Enviar"}</button>
                        </div>
                        <div className="col-md-1">
                            <button className="btn btn-primary" onClick={this.limpar}>Limpar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}