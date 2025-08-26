import * as React from "react";
export function EmptyState({ title, description, action }:{ title:string; description?:string; action?:React.ReactNode }){
  return (<section className="panel" style={{textAlign:"center"}}><h1 style={{marginTop:0}}>{title}</h1>
    {description && <p style={{color:"var(--muted)"}}>{description}</p>}{action && <div style={{marginTop:12}}>{action}</div>}</section>);
}