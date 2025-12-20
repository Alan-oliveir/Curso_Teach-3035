import { createBrowserRouter } from "react-router-dom";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
  },
  {
    path: "/profile/:username", // Rota dinâmica para o perfil do usuário
    element: <Profile />,
  },
]);
