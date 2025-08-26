import { Link, useLocation } from "react-router-dom";
export default function Breadcrumbs(){
  const { pathname } = useLocation(); const parts = pathname.split("/").filter(Boolean);
  const crumbs = [{label:"Home", href:"/"}, ...parts.map((p,i)=>({label:p.charAt(0).toUpperCase()+p.slice(1), href:"/"+parts.slice(0,i+1).join("/")}))];
  return (<div className="breadcrumbs">{crumbs.map((c,i)=><span key={c.href}>{i>0&&<span className="sep">/</span>}{i===crumbs.length-1?<span>{c.label}</span>:<Link to={c.href}>{c.label}</Link>}</span>)}</div>);
}