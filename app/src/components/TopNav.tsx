import { useEffect, useState } from "react";
import { toggleTheme, systemPrefersDark } from "@utils/theme";
export default function TopNav(){
  const [dark,setDark]=useState(false); useEffect(()=>setDark(systemPrefersDark()),[]);
  return (<header className="topbar"><div style={{display:"flex",gap:12,alignItems:"center"}}><strong>HaloUI</strong><span style={{color:"var(--muted)",fontSize:12}}>(catalog)</span></div>
    <div style={{display:"flex",gap:12,alignItems:"center"}}><a href="https://react.dev/" target="_blank" rel="noreferrer">Docs</a><button className="btn" onClick={()=>{toggleTheme(); setDark(!dark);}}>{dark?"Light":"Dark"}</button></div></header>);
}