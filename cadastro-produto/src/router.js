import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import Home from './views/home';
import CadastroProduto from './views/produtos/cadastro';

export default () => {
    return(
        <HashRouter>
            <switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/cadastro-produto" component={CadastroProduto} />

            </switch>
        </HashRouter>
    )
}
