import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
const Dashboard = lazy(()=>import("@pages/Dashboard/Dashboard"));
const CardViewPage = lazy(()=>import("@pages/CardView/CardView"));
const TableBasic = lazy(()=>import("@pages/TableBasic/TableBasic"));
const TableWithFilters = lazy(()=>import("@pages/TableWithFilters/TableWithFilters"));
const DetailsPage = lazy(()=>import("@pages/DetailsPage/DetailsPage"));
const FormSimple = lazy(()=>import("@pages/FormSimple/FormSimple"));
const WizardCreate = lazy(()=>import("@pages/WizardCreate/WizardCreate"));
const Charts = lazy(()=>import("@pages/Charts/Charts"));
const EmptyState = lazy(()=>import("@pages/EmptyState/EmptyState"));
const Settings = lazy(()=>import("@pages/Settings/Settings"));
const Help = lazy(()=>import("@pages/Help/Help"));
const NotFound = lazy(()=>import("@pages/NotFound"));
export type NavItem = { text:string; href:string; children?: NavItem[] };
export const nav: NavItem[] = [
  { text: "Dashboard", href: "/" },
  { text: "Browse", href: "#", children: [
    { text: "Card view", href: "/card-view" },
    { text: "Table (basic)", href: "/table-basic" },
    { text: "Table + Filters", href: "/table-filters" },
    { text: "Details page", href: "/details" }
  ]},
  { text: "Create", href: "#", children: [
    { text: "Form (single page)", href: "/form" },
    { text: "Wizard (multi-page)", href: "/wizard" }
  ]},
  { text: "Other", href: "#", children: [
    { text: "Charts", href: "/charts" },
    { text: "Empty state", href: "/empty" },
    { text: "Settings", href: "/settings" },
    { text: "Help", href: "/help" }
  ]}
];
export const routes: RouteObject[] = [
  { index: true, element: <Dashboard /> },
  { path: "card-view", element: <CardViewPage /> },
  { path: "table-basic", element: <TableBasic /> },
  { path: "table-filters", element: <TableWithFilters /> },
  { path: "details", element: <DetailsPage /> },
  { path: "form", element: <FormSimple /> },
  { path: "wizard", element: <WizardCreate /> },
  { path: "charts", element: <Charts /> },
  { path: "empty", element: <EmptyState /> },
  { path: "settings", element: <Settings /> },
  { path: "help", element: <Help /> },
  { path: "*", element: <NotFound /> }
];