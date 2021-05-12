import { TextField } from '@material-ui/core';
import React from 'react';

const TagTeste = ({apiRes}) =>{

    let dados = apiRes
    console.log(apiRes, dados)

    return(
        <h1>{console.log(apiRes)}</h1>
    )
}

export default TagTeste;