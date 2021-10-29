import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar"
import Home from './pages/home/Home'
import "./app.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import { userRows } from "./dummyData";
import UsuarioId from "./pages/usuarioid/UsuarioId";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import ProductoId from "./pages/productoId/ProductoId";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <div>
      {/*aqui van las rutas de la pagina */}
      <Router>
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <Switch>
            {/*Home */}
            <Route exact path="/">
              <Home/>
            </Route>
            {/*todos los usuarios */}
            <Route path="/usuarios">
              <UserList/>
            </Route>
            {/*usuario por id */}
            <Route path="/usuario/:usuarioId">
              <UsuarioId/>
            </Route>
            {/*creacion de nuevo usuario */}
            <Route path="/nuevoUsuario">
              <NewUser/>
            </Route>
            {/*productos*/}
            <Route path="/productos">
              <ProductList/>
            </Route>
            {/*productos por id*/}
            <Route path="/producto/:productoId">
              <ProductoId/>
            </Route>
            {/*crear un producto*/}
            <Route path="/crearProducto">
              <NewProduct/>
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
