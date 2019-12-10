import React from 'react';
import '../estilos/sass/estilos.css';

class InfoUsrHeader extends React.Component{
    render(){
        return <>
<tr>
                <td>
                    UsuarioNombre<br />
                    <a href="google.com">Cerrar Sesión</a> 
                </td>                        
                <td>
                    <img src="google.com" alt="avatar" className="td2"/>
                </td>

            </tr>
        </>;
    }
}

export default InfoUsrHeader;