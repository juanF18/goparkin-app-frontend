import { UnLoggedNavigation } from "./routes";
import { LoggedNavigation } from "./routes/LoggedNavigation";

function App() {
  /**
   * La constante user se va a convertir en un estado para cuando tengamos implementada el api
   * y saber que si el usuario esta registrado traer el rol y retornarles una navegacion por rutas
   */
  const user = null;

  //Si es tipo user me retorna la navegacion del usuario
  return user ? <UnLoggedNavigation /> : <LoggedNavigation />;
}

export default App;
