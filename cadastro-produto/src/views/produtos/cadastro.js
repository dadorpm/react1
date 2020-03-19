import React from 'react';
const estadoInicial = {
    nome : '',
    sku : '',
    descricao : '',
    preco : 0,
    fornecedor : ''
}
export default class CadastroProduto extends React.Component{
    state = estadoInicial;
    onChange = (event) => {
        const valor = event.target.value;
        const campo = event.target.name;
        this.setState({
            [campo]:valor
        })
    }
    onSubmit = (event) => {
        console.log(this.state);
    }
    limpar = (event) => {
        this.setState(estadoInicial)
    }
    render(){
        return(
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Cadastro Produto</h4>
                </div>
                <div className="card-body">
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
                                    <input name="sku" onChange={this.onChange} className="form-control" value={this.state.sku} type="text"/>
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
                            <button className="btn btn-success" onClick={this.onSubmit}>Enviar</button>
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