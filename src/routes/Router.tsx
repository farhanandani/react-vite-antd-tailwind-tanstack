import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { appRoutes } from "./AppRoutes";

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
  </div>
);

function renderRoutes(routes: typeof appRoutes) {
  return routes.map((route) => (
    <Route key={route.path ?? "root"} path={route.path} element={route.element}>
      {route.children?.map((child, idx) =>
        child.index ? (
          <Route key="index" index element={child.element} />
        ) : (
          <Route
            key={child.path ?? idx}
            path={child.path}
            element={child.element}
          />
        ),
      )}
    </Route>
  ));
}

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {renderRoutes(appRoutes)}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
