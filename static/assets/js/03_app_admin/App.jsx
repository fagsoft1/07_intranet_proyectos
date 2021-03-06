import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Loading from '../00_utilities/components/system/loading_overlay';
import DrawerMenu from '../00_utilities/components/ui/drawer/drawer_menu';

import Menu from './00_menu/index';

import App1 from "./index";
import PermisosList from "./generales/permisos/containers/permisos_list";
import GruposPermisosList from "./generales/permisos/containers/grupos_permisos_list";
import UsuariosList from "./generales/usuarios/containers/usuarios_list_container";
import ColaboradoresDashBoard
    from "./especificas/cguno/colaboradores/colaboradores_dashboard/containers/colaboradores_dashboard";
import ColaboradoresDetail from "./especificas/cguno/colaboradores/colaboradores/containers/base_detail";
import ColaboradoresCostosNominaList
    from "./especificas/cguno/colaboradores/costos_nomina/containers/costos_nomina_list_container";
import UsuariosDetail from "./generales/usuarios/containers/usuarios_detail";
import ClientesList from "./especificas/clientes/clientes/containers/clientes_container";
import ClientesDashboard from "./especificas/clientes/clientes_dashboard/containers/clientes_dashboard";
import SistemaInformacionOrigenList
    from "./especificas/sistemas_informacion_origen/containers/sistemas_informacion_origen_container";
import GeografiaList
    from "./especificas/geografia/geografia_dashboard/containers/geografia_dashboard";


import ConfiguracionCostosDashboard from "./especificas/configuraciones/containers/costos_dashboard";
import ItemsDashboard from "./especificas/items/items_dashboard/containers/items_dashboard";
import ImportacionesDashboard
    from "./especificas/importaciones/importaciones_dashboard/containers/importaciones_dashboard";
import ListasPreciosDashboard
    from "./especificas/listas_precios/listas_precios_dashboard/containers/listas_precios_dashboard";


class AdminApp extends Component {
    render() {
        return (
            <Loading>
                <DrawerMenu lista_menu={<Menu/>} titulo='Admin'>
                    <Switch>
                        <Route exact path='/app/admin/' component={App1}/>
                        <Route exact path='/app/admin/sistemas_informacion/list'
                               component={SistemaInformacionOrigenList}/>
                        <Route exact path='/app/admin/geografia/list' component={GeografiaList}/>
                        <Route exact path='/app/admin/permisos/list' component={PermisosList}/>
                        <Route exact path='/app/admin/grupos_permisos/list' component={GruposPermisosList}/>
                        <Route exact path='/app/admin/usuarios/list' component={UsuariosList}/>
                        <Route exact path='/app/admin/colaboradores/dashboard' component={ColaboradoresDashBoard}/>
                        <Route exact path='/app/admin/colaboradores/costos_nomina/list'
                               component={ColaboradoresCostosNominaList}/>
                        <Route exact path='/app/admin/cguno/colaborador/detail/:id' component={ColaboradoresDetail}/>
                        <Route exact path='/app/admin/usuarios/detail/:id' component={UsuariosDetail}/>
                        <Route exact path='/app/admin/clientes/clientes/list' component={ClientesList}/>
                        <Route exact path='/app/admin/clientes/clientes/dashboard' component={ClientesDashboard}/>
                        <Route exact path='/app/admin/configuraciones/costos/dashboard'
                               component={ConfiguracionCostosDashboard}/>
                        <Route exact path='/app/admin/items/dashboard' component={ItemsDashboard}/>
                        <Route exact path='/app/admin/importaciones/dashboard' component={ImportacionesDashboard}/>
                        <Route exact path='/app/admin/listas_precios/dashboard' component={ListasPreciosDashboard}/>
                    </Switch>
                </DrawerMenu>
            </Loading>
        )
    }
}

export default AdminApp;