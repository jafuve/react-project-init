import React, { useState, useEffect  } from 'react'
import MaterialTable from '@material-table/core'
import { Button, Modal } from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

import backendApi from '../../../api/backendApi';
import { localizationSpanish } from '../utils/utils';
import Swal from 'sweetalert2';

const columns = [
    {
        title: 'Id',
        field: 'Id'
    },
    {
        title: 'Nombre',
        field: 'Name'
    },
    {
        title: 'Apellidos',
        field: 'Surname'
    },
    {
        title: 'Usuario',
        field: 'Username'
    },
    {
        title: 'Tipo',
        field: 'UserRoleId'

    },
    {
        title: 'Estado',
        field: 'IsActive'

    },
];

export const UsersView = () => {

    const [data, setData] = useState([])

    useEffect(async () => {
    
        const { data } = await backendApi.get('/users');
        
        setData(data.results)
    
    }, [])

    const editItem = (id) => {
        alert("FOR EDIT ID: " + id)
    } // END EDIT

    const deleteItem = (id) => {
        alert("FOR DELETE ID: " + id)
    } // END EDIT

    const [createModalShow, setCreateModalShow] = useState(false)

    const handleModalCancel = () => {
        Swal.fire({
            title: 'Cancelar ingreso',
            html: "Se perderán los datos ingresados.<br>¿Desea cancelar ingreso?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Cancelar',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.value) {
                // Close modal
                setCreateModalShow(false);

                // Celan Modal
            }//END IF
    
        });
    } // END handleModalCancel

    const handleModalSave = (e) => {
        e.preventDefault();
        console.log("Save")
    }   
    

    return (
        <>
        <Modal 
            show={createModalShow}
            //onHide={handleClose}
            backdrop="static"
            keyboard={false}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                Crear usuario
            </Modal.Header>

            <Modal.Body>
                <form id="formAddUser" name="formAddUser" role="form" method="post" autoComplete="off">
                    <div className="modal-body">
                        <div className="row">
                        {/* ID NAME */}
                        <div className="form-group col-md-6">
                            <label htmlFor="newUserName">Nombres</label>
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user" /></span>
                            </div>
                            <input type="text" className="form-control input-lg" id="newUserName" name="newUserName" placeholder="Ingresar nombre" maxLength={50} required />
                            </div>
                        </div>
                        {/* DESCRIPTION */}
                        <div className="form-group col-md-6">
                            <label>Apellidos</label>
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user" /></span>
                            </div>
                            <input type="text" className="form-control input-lg" id="newUserSurname" name="newUserSurname" placeholder="Ingresar apellido" maxLength={50} required />
                            </div>
                        </div>
                        {/* INPUT CATEGORY */}
                        <div className="form-group col-md-6">
                            <label>Rol</label>
                            <div className="input-group ">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-th" /></span>
                            </div>
                            <select id="newUserRole" name="newUserRole" className="form-control input-lg" required>
                                <option value={0} disabled defaultValue={true}>Seleccione Rol</option>
                            </select>
                            </div>
                        </div>
                        {/* DESCRIPTION */}
                        <div className="form-group col-md-6">
                            <label>Usuario</label>
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-code" /></span>
                            </div>
                            <input type="text" className="form-control input-lg" id="newUserUsername" name="newUserUsername" placeholder="Ingresar usuario" maxLength={10} required />
                            </div>
                            <div id="newUsernameFeedback" className="invalid-feedback" />
                        </div>
                        {/* DESCRIPTION */}
                        <div className="form-group col-md-6">
                            <label>Contraseña</label>
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key" /></span>
                            </div>
                            <input type="password" className="form-control input-lg" id="newUserPassword" name="newUserPassword" placeholder="Ingrese contraseña" maxLength={30} required />
                            </div>
                        </div>
                        {/* DESCRIPTION */}
                        <div className="form-group col-md-6">
                            <label>Confirmar contraseña</label>
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key" /></span>
                            </div>
                            <input type="password" className="form-control input-lg" id="newUserPassword2" name="newUserPassword2" placeholder="Confirmar contraseña" maxLength={30} required />
                            <div className="input-group-append" id="button-addon4">
                                <button id="showPass" className="btn btn-outline-info" type="button" title="Mostrar contraseña" onClick="showHidePassword()"><i className="far fa-eye" /></button>
                                <button id="hidePass" className="btn btn-outline-danger" type="button" title="Ocultar contraseña" onClick="showHidePassword()" style={{display: 'none'}}><i className="far fa-eye-slash" /></button>
                            </div>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger mr-auto" onClick={handleModalCancel}>Cancelar</button>
                        <button type="submit" className="btn btn-success" onClick={handleModalSave}>Guardar usuario</button>
                    </div>
                    </form>

            </Modal.Body>

        </Modal>

        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1 className="m-0">Users</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="">Home</a></li>
                        <li className="breadcrumb-item active">Users</li>
                    </ol>
                    </div>
                </div>
                </div>
            </div>
            <div className="content">
                <div className="container-fluid">
                
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Usuarios </h3>
                            <div className="card-tools">
                            <button id="btnCreateUser" type="button" className="btn btn-tool btn-primary btn-tool-add mr-2" title="Crear nuevo usuario" onClick={ () => setCreateModalShow(true) }>
                                <i className="fas fa-plus" /> Crear usuario</button>
                            <span hidden id="userLimitReached" className="badge badge-warning">Limite de usuarios alcanzado (5)</span>
                            </div>
                        </div>
                        <div className="card-body">
                            <MaterialTable 
                                columns={columns}
                                data={data}
                                title="Usuarios"
                                options={{ actionsColumnIndex: -1 }}
                                localization= {localizationSpanish}
                                actions={[
                                    {
                                        icon: () => <Edit color='primary' />  ,
                                        tooltip: 'Editar',
                                        onClick: (event, rowData) => editItem(rowData.Id)
                                    },
                                    {
                                        icon: () => <DeleteIcon color='error' /> ,
                                        tooltip: 'Delete',
                                        onClick: (event, rowData) => deleteItem(rowData.Id)
                                    },
                                ]}
                            />
                            
                            {/* /.card-body */}
                        </div>
                    </div>


                </div>
            </div>
        </div>
        </>
    )

    

}
