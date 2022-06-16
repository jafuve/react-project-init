import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from "../../auth/store/actions";
import * as $ from 'jquery';

export const Nabvar = () => {

  const dispatch = useDispatch();
  const { username } = useSelector(state => state.auth);

  let activeStyle = {
    textDecoration: "underline"
  };

  let activeClassName = "underline"

  const handleLogout = () => {
    dispatch(startLogout())
  };

  function changeStatusMenu() {
    $('[data-widget="pushmenu"]').PushMenu('toggle')
  }

  return (

    <nav className="main-header navbar navbar-expand navbar-white navbar-light">

      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" onClick={changeStatusMenu} data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <NavLink className="nav-link"
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Inicio
          </NavLink>
          {/* <a href="index3.html" className="nav-link">Inicio</a> */}
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">

        <li className="dropdown nav-item user user-menu mt-2 mr-2 ml-2">
          {/* Menu Toggle Button */}
          <a href="#" className="dropdown-toggle text-dark" data-toggle="dropdown">
            {/* The user image in the navbar*/}
            <img src="logo512.png" className="user-image" alt="User Image" />
            {/* hidden-xs hides the name on small devices so only the image appears. */}
            <span className="hidden-xs text-dark"> {username} </span>
          </a>
          <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            {/* The user image in the menu */}
            <li className="user-header">
              <img src="logo512.png" className="img-circle" alt="User Image" style={{ cursor: 'pointer' }} />
              <p>
                <b>{username}</b>
                <small> Hora acceso: {/*?php echo date('d-m-Y H:i:s') ?*/}</small>
              </p>
            </li>
            {/* Menu Footer*/}
            <li className="user-footer">
              <div className="float-left">
                <a href="../admin/employee-profile.php?id=<?php echo $userID; ?>" className="btn btn-primary btn-flat">Perfil</a>
              </div>
              <div className="float-right">
                <button href="#" onClick={handleLogout} className="btn btn-danger btn-flat">Cerrar sesión</button>
              </div>
            </li>
          </ul>
        </li>




        <li className="nav-item">
          <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i className="fas fa-th-large" /></a>
        </li>
      </ul>
    </nav>

  ) // END RETURN
}
