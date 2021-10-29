import './userlist.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteForever, Create } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function UserList() {

  //inicializamos el estado de los datos de la tabla usuarios
  const [data, setData] = useState(userRows)

  //funcion para eliminar
  const handleDelete = (id) => {

    //validamos si quiere eliminar el usuario
    if (window.confirm("¿Desea eliminar el usuario?")){
      //el estado setData sera, toda la data la filtramos y buscamos un item, la funciona sera que ese item.id sea igual a el id a buscar
    setData(data.filter((item) => item.id !== id))
    }    
  }

  //los campos que se mostraran en la tabla
  //field (el nombre tal cual debe tener en los datos)
  //headerName (el nombre con el cual se mostrara)
  //width (el ancho)
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'username', headerName: 'Usuario', width: 160, renderCell: (params)=>{
          //metodo para extraer los datos de la data
          //desde los params(argumento pasado),row (nombre del objeto que tiene la data), avatar (el dato en cuestion)
            return (
                <div className="userListUser">
                    <img src={params.row.avatar} alt="" className="userListImg" />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 180 },
        { field: 'status', headerName: 'Estado', width: 120, },
        { field: 'transaction', headerName: 'Transaccion', width: 150,},
        { field: 'action', headerName: 'Accion', width: 120,
        renderCell: (params)=>{
          return (
            //para que se muestre se encierra en un <div> o en <>
              <>
              <Link to={"/usuario/" + params.row.id}>
                <button className="userListEdit"><Create/></button>
              </Link>
              <button className="userListDelete"
              onClick={()=>
                handleDelete(params.row.id)
              }><DeleteForever/></button>            
              </>
          );
      },},
      ];

    return (
        <div className="userList">
            <DataGrid 
            //row sera toda la data de userRows exportada de dummyData
            rows={data} 
            //equita que se selecciona una fila donde sea
            disableSelectionOnClick
            columns={columns} 
            //muestra la cantidad de datos que se mostrara
            pageSize={10} 
            checkboxSelection />
        </div>
    )
}
