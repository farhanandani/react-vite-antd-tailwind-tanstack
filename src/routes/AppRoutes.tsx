import React from "react";

const ExamplePage = React.lazy(() => import("@/module/Example"));

interface AppRoute {
  path: string;
  element: React.ReactElement;
  title?: string;
}

export const appRoutes: AppRoute[] = [
  {
    path: "/home",
    element: <ExamplePage />,
    title: "Home",
  },
  {
    path: "/example",
    element: <ExamplePage />,
    title: "Example",
  },
];
