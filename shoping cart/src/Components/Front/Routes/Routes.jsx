import React from 'react'
// import { Route,Switch } from "react-router-dom";
import Product from '../Product/Product';
// import Singup from '../Singup/Singup';

const Routes = ({productItems}) => {
  return (
    <div>
    {/* <Switch>
        <Route> */}
            <Product productItems={productItems} />
        {/* </Route>
         <Route path='/singup'>
            <Singup/>
         </Route>



    </Switch> */}

    </div>
  )
}

export default Routes