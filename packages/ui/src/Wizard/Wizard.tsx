import * as React from "react";
export function Wizard({ steps, onFinish }:{ steps:{title:string; content:React.ReactNode}[]; onFinish:()=>void; }){
  const [i,setI]=React.useState(0); const last=i===steps.length-1;
  return (<section className="panel"><h1 style={{marginTop:0}}>{steps[i].title}</h1><div style={{marginBottom:12}}>{steps[i].content}</div>
    <div style={{display:"flex",gap:8}}>
      <button className="btn" onClick={()=>setI(Math.max(0,i-1))} disabled={i===0}>Back</button>
      {!last && <button className="btn primary" onClick={()=>setI(Math.min(steps.length-1,i+1))}>Next</button>}
      {last && <button className="btn primary" onClick={onFinish}>Finish</button>}
    </div></section>);
}