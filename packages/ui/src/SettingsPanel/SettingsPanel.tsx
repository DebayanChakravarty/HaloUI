import * as React from "react";
export function SettingsPanel({ sections, onChange }:{ sections:{id:string; title:string; content:React.ReactNode}[]; onChange?:(id:string)=>void; }){
  const [active,setActive]=React.useState(sections[0]?.id); const current=sections.find(s=>s.id===active);
  return (<div className="grid-cards"><aside className="panel"><ul style={{listStyle:"none",padding:0,margin:0}}>
    {sections.map(s=><li key={s.id} style={{marginBottom:8}}><button className="btn" onClick={()=>{setActive(s.id); onChange?.(s.id);}}>{s.title}</button></li>)}
  </ul></aside><section className="panel" style={{minHeight:220}}>{current?.content || <em>Select a section</em>}</section></div>);
}