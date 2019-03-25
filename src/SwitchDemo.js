import React from 'react';
import {Switch,Route, withRouter} from 'react-router-dom';

const Homepage = () =>(
<div>HOME PAGE</div>
);
const About = () =>(
<div>ABOUT PAGE</div>
)

const SwitchDemo = () =>(

<Switch>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/about' component={About} />
</Switch>
);
export default withRouter(SwitchDemo);