import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './home';
import User from './user';
import Input from './input';
import Product from '../product'

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/input" component={Input} />
        <Route path="/product" component={ Product } />
    </Switch>
)

export default Utama;