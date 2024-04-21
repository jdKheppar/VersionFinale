import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/authContext.jsx"; // Import AuthProvider
import ProtectedRoute from "./components/ProtectedRoute.jsx"; // Import ProtectedRoute
import Home from "./pages/Home/Home.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Auth from "./pages/Auth/Auth.jsx";
import AdminAddProduitForm from "./pages/Admin/components/AdminAddProduitForm/AdminAddProduitForm.jsx";
import AdminEditProduitForm from "./pages/Admin/components/AdminEditProduitForm/AdminEditProduitForm.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Register from "./pages/Auth/components/Register/Register.jsx";
import Login from "./pages/Auth/components/Login/Login.jsx";
import { getProduit } from "./backendcall/produits.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <App />
      </AuthProvider>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin",
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "add",
            element: (
              <ProtectedRoute>
                <AdminAddProduitForm />
              </ProtectedRoute>
            ),
          },
          {
            path: "edit/:produitId",
            element: (
              <ProtectedRoute>
                <AdminEditProduitForm />
              </ProtectedRoute>
            ),
            loader: async ({ params: { produitId } }) => getProduit(produitId),
          },
        ],
      },
      {
        path: "auth",
        element: <Auth />,
        children: [
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
    ],
  },
]);

export default router;
