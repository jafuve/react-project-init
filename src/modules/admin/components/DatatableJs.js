//import './css/jquery.dataTables.css'
import React, { useEffect, useRef, useState } from 'react'

const $ = require('jquery')
$.DataTable = require('datatables.net')

export const DatatableJs = ({data, columns, buttonActions}) => {
    // console.log(data)
    console.log(buttonActions)
    let tableElement = useRef();
    let $elmt;

    const [firstTime, setFirstTime] = useState(true)

    useEffect(() => {

        $elmt = $(tableElement.current)

        if(!firstTime){
            $elmt.DataTable().destroy()
        }

        $elmt.DataTable({
            "deferRender": true,
            "retrieve": true,
            "processing": true,
            "pageLength" : 15,
            data: data,
            language: {
                "sProcessing": "Procesando...",
                "sLengthMenu": "Mostrar _MENU_ registros",
                "sZeroRecords": "No se encontraron resultados",
                "sEmptyTable": "Ningún dato disponible en esta tabla",
                "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
                "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0",
                "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix": "",
                "sSearch": "Buscar:",
                "sUrl": "",
                "sInfoThousands": ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast": "Último",
                    "sNext": "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                }
        
            },
            columns
        })

        setFirstTime(false)

    }, [data])

    return (
        <div className="table-responsive">

            <table
                className='display table table-bordered table-hover table-striped table-sm dt-responsive text-center' width="100%" ref={tableElement}
            >

            </table>
        
            <br/>
        </div>
    )
}
