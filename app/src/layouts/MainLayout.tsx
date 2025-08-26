import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import TopNav from "@components/TopNav";
import SideNav from "@components/SideNav";
import Breadcrumbs from "@components/Breadcrumbs";
export default function MainLayout(){
  return (<div className="app-shell"><TopNav/><div className="main-row"><SideNav/><main className="content"><Breadcrumbs/><Suspense fallback={<div>Loading…</div>}><Outlet/></Suspense></main></div></div>);
}