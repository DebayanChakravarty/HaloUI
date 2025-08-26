import * as React from "react";
export type DetailGroup = { title:string; items:{label:string; value:React.ReactNode}[] };
export function DetailView({ groups }:{ groups:DetailGroup[] }) {
  return <div className="grid-cards">{groups.map((g,i)=>(<section className="panel" key={i}><h2 style={{margin:"0 0 8px",fontSize:16}}>{g.title}</h2><dl>
    {g.items.map((it,j)=>(<div key={j} style={{display:"flex",gap:12,padding:"6px 0",borderBottom:"1px solid var(--border)"}}><dt style={{width:160,color:"var(--muted)"}}>{it.label}</dt><dd style={{margin:0}}>{it.value}</dd></div>))}
  </dl></section>))}</div>;
}