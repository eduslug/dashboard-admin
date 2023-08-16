import React, { useState } from 'react';
import Authentication from '../Authentication/index';

const [state, setState] = useState(Authentication);

function Login() {
    console.log(state, 'login teste');
    return (
        <button type='button' onClick={setState}></button>
    )
}

export default Login    