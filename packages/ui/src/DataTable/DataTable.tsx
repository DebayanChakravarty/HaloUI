import * as React from "react";
export type Column<T> = { id:string; header:string; cell:(row:T)=>React.ReactNode };
export type Filter<T> = { id:string; label:string; predicate:(row:T, value:any)=>boolean };
export function DataTable<T>({ columns, data, filters = [], onRowClick }:{ columns:Column<T>[]; data:T[]; filters?:Filter<T>[]; onRowClick?:(row:T)=>void; }) {
  const [values, setValues] = React.useState<Record<string, any>>({});
  const filtered = React.useMemo(()=>data.filter(r=>filters.every(f=>values[f.id]===undefined || f.predicate(r, values[f.id]))),[data,filters,values]);
  return (<div>
    {filters.length>0 && <div style={{display:"flex",gap:12,marginBottom:12}}>{filters.map(f=><label key={f.id} style={{fontSize:12}}>{f.label} <input onChange={e=>setValues(v=>({...v,[f.id]:e.target.value}))}/></label>)}</div>}
    <div className="table-wrap"><table className="table"><thead><tr>{columns.map(c=><th key={c.id}>{c.header}</th>)}</tr></thead><tbody>
      {filtered.map((row,i)=><tr key={i} onClick={()=>onRowClick?.(row)}>{columns.map(c=><td key={c.id}>{c.cell(row)}</td>)}</tr>)}
    </tbody></table></div></div>);
}