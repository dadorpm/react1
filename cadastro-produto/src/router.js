import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import Home from './views/home';
import CadastroProduto from './views/produtos/cadastro';
import ConsultaProduto from './views/produtos/consulta';

export default () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/cadastro-produto/:sku?" component={CadastroProduto} />
                <Route exact path="/consulta-produto" component={ConsultaProduto}/>

            </Switch>
        </HashRouter>
    )
}
