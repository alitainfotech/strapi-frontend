import React from "react";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// App Layout
import AppLayout from "./components/Layout/AppLayout";
import NonAuthLayout from "./components/Layout/NonAuthLayout";

// Auth
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import RouteAuthGuard from "./components/RouteAuthGuard";

import Home from "./pages/Home";

// Restaurants
import Restaurant from "./pages/Restaurant";
import RestaurantList from "./pages/Restaurant/list";
import Info from "./pages/Restaurant/Info";

import Error404 from "./Utility/Error404";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <RouteAuthGuard isAuthProtected={true}>
              <AppLayout />
            </RouteAuthGuard>
          }
        >
          <Route path="/" element={<Home />} />

          <Route path="/restaurants" element={<Restaurant />}>
            <Route path="list" element={<RestaurantList />} />
            <Route path="list/:id" element={<Info />} />
          </Route>
        </Route>

        <Route
          path="/login"
          element={
            <RouteAuthGuard isAuthProtected={false}>
              <NonAuthLayout>
                <Login />
              </NonAuthLayout>
            </RouteAuthGuard>
          }
        />

        <Route
          path="/register"
          element={
            <RouteAuthGuard isAuthProtected={false}>
              <NonAuthLayout>
                <Register />
              </NonAuthLayout>
            </RouteAuthGuard>
          }
        />

        <Route
          path="*"
          element={
            <NonAuthLayout>
              <Error404 />
            </NonAuthLayout>
          }
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
