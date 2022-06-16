import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'

export const Sidebar = () => {

  const { username } = useSelector(state => state.auth);

  let activeClassName = "active";
  let menuOpenClassName = "menu-open";

  const menuOptions = [
    {
      id: 1,
      header: 'Punto de venta',
      active: 0,
      icon: '',
      elements: [
        { id: 12, parent: 1, title: 'Nueva venta', icon: '', route: '/sale-create' },
        { id: 13, parent: 1, title: 'Ventas del día', icon: '', route: '/aswdf' },
        { id: 14, parent: 1, title: 'Existencias', icon: '', route: '/aswdf' },
      ], // END ELEMENTS
    },
    {
      id: 2,
      header: 'Administración',
      active: 0,
      icon: '',
      elements: [
        { id: 21, parent: 2, title: 'Productos', icon: '', route: '/products' },
        { id: 22, parent: 2, title: 'Propiedades productos', icon: '', route: '/product-settings' },
        { id: 23, parent: 2, title: 'Proveeodres', icon: '', route: '/suppliers' },
        { id: 24, parent: 2, title: 'Clientes', icon: '', route: '/customers' }
      ], // END ELEMENTS
    },
    {
      id: 3,
      header: 'Gerencia',
      active: 0,
      icon: '',
      elements: [
        { id: 31, parent: 3, title: 'Reportes', icon: '', route: '/aswdf' },
        { id: 32, parent: 3, title: 'Usuarios', icon: '', route: '/users' },
      ], // END ELEMENTS
    },
  ];

  const [menu, setMenu] = useState(menuOptions);


  const itemClicked = (parentId) => {
    // console.log(menu)
    const newMenu = menu.map(item => {
      if (item.id === parentId)
        item.active = 1
      else
        item.active = 0

      return item
    });

    setMenu(newMenu)

  };

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}

      <NavLink
        to="/"
        className="brand-link"
      >
        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
        <span className="brand-text font-weight-light">Software Name</span>
      </NavLink>

      {/* Sidebar */}
      <div className="sidebar">

        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
          </div>
          <div className="info">
            <a href="#" className="d-block">{username}</a>
          </div>
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">

            <li className="nav-item"> {/* this one has 'menu-open' class */}
              <NavLink
                to="/"
                onClick={() => itemClicked(0)}
                className={({ isActive }) => "nav-link" + (isActive ? ` ${activeClassName}` : "")}
              >
                <i className="nav-icon fas fa-home"></i>
                <p>
                  Inicio
                </p>
              </NavLink>
            </li>

            <li
              className={`nav-item`}
            >
              <a href="#"
                className={`nav-link`}
              >
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  algo
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">

                <li className="nav-item"
                >
                  <NavLink
                    to="/"

                    className={({ isActive }) => "nav-link" + (isActive ? ` ${activeClassName}` : "")}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>asfsfsfsf</p>
                  </NavLink>
                </li>
              </ul>
            </li>


            {
              menu.map(item => (
                // <li key={item.id} className="nav-item menu-open" >
                <li key={item.id}
                  className={`nav-item ${item.active === 1 ? menuOpenClassName : ''}  `}
                >
                  <a href="#"
                    className={`nav-link ${item.active === 1 ? activeClassName : ''}  `}
                  >
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      {item.header}
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    {
                      item.elements.map(element => (
                        <li key={element.id} className="nav-item"
                        >
                          <NavLink
                            onClick={() => itemClicked(element.parent)}
                            to={element.route}

                            className={({ isActive }) => "nav-link" + (isActive ? ` ${activeClassName}` : "")}
                          >
                            <i className="far fa-circle nav-icon" />
                            <p>{element.title}</p>
                          </NavLink>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              ))
            }

            {/* <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Starter Pages
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Active Page</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Inactive Page</p>
              </a>
            </li>
          </ul>
        </li> */}

          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>

  ) // END RETURN
}
