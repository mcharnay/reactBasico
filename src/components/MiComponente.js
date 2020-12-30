import React, {Component} from 'react';

//crear componente de react
class MiComponente extends Component{
    
    //es un json con un arreglo
    render(){
        let receta ={
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon Cocido'],
            calorias : 400
        };

        return(
            <div className="mi-component">
                <h1>{'Receta : ' + receta.nombre}</h1>
                <h2>{'Calorías : ' + receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingredientes, i) =>{
                            console.log(ingredientes);
                            return (
                                <li key="i">
                                    {ingredientes}
                                </li>
                            );
                        })
                    }
                </ol>
                <hr/>
            </div>
        );
    }
}

export default MiComponente;