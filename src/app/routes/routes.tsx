import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const DetailsPage = lazy(() => import("../../pages/DetailsPage/DetailsPage"));
const CreateGamePage = lazy(
  () => import("../../pages/CreateGamePage/CreateGamePage"),
);

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/games" element={<CatalogPage />} />
    <Route path="/game/:id" element={<DetailsPage />} />
    <Route path="/create-game" element={<CreateGamePage />} />
  </Routes>
);
