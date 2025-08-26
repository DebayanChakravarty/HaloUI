import * as React from "react";
type Field = { name:string; label:string; type?:"text"|"select"; options?:{label:string; value:string}[] };
export function FormBuilder({ fields, onSubmit }:{ fields:Field[]; onSubmit:(values:Record<string,any>)=>void; }){
  const [values, setValues] = React.useState<Record<string, any>>({});
  return (<form onSubmit={e=>{e.preventDefault(); onSubmit(values);}} style={{maxWidth:560}}>
    {fields.map(f=>(<div key={f.name} style={{marginBottom:12}}><label style={{display:"block",fontSize:12,marginBottom:6}}>{f.label}</label>
      {f.type==="select"?<select className="select" onChange={e=>setValues(v=>({...v,[f.name]:e.target.value}))}>{(f.options||[]).map(o=><option key={o.value} value={o.value}>{o.label}</option>)}</select>:
      <input className="input" onChange={e=>setValues(v=>({...v,[f.name]:e.target.value}))}/>}</div>))}
    <button className="btn primary" type="submit">Submit</button></form>);
}