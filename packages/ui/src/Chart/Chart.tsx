import * as React from "react";
export function Chart({ title, children }:{ title:string; children?:React.ReactNode }){
  return (<section className="panel"><h1 style={{marginTop:0}}>{title}</h1>
    <div style={{height:180,display:"grid",placeItems:"center",color:"var(--muted)"}}>{children || "Place your chart library here"}</div></section>);
}