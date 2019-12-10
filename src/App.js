import React from 'react';
import './App.css';
import Header from '../src/componentes/header';
import Footer from '../src/componentes/footer';
import InfoUsrHeader from '../src/componentes/infoUsrHeader';
import Menu from '../src/componentes/menu';
import Cards from '../src/componentes/cardContainer';

class App extends React.Component {
  render(){
  return (<>
   {/*<Header />*/}
<table className="contenedor_tabla">
<tr>
    <td className="logo logo2" align="center">
        <img src="google.com" alt="logo" />
    </td>
    <td className="td1">
        <table className="informacion">
                    <InfoUsrHeader/>                                     
        </table>
    </td>
</tr>
<tr>
    <Menu />
    <td valign="top" align="center" className="td3">
    <div ID="pnlConteneroPrincipal"> {/*SEGÚN YO, AQUÍ DEBERIA IR LO DEL BROWSER ROUTE PARA QUE AL DAR CLICK A CUALQUIER TARJETA NOS CARGUE ESE COMPONENTE EN ESTE ESPACIO COMO POR EJEMPLO <Cards/> (DENTRO DE pnlConteneroPrincipal PARA ASÍ NO CARGAR DE NUEVO EL MENU Y HEADER ETC )*/}
        <h1>Titulo</h1>
        <Cards />
    </div>
    </td>
</tr>
</table>   

{/*<Footer />*/}
</>
  );
}
}
export default App;
  