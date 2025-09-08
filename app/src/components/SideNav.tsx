import { NavLink } from "react-router-dom";
import { nav } from "../routes/catalog"; // Adjust the path to match your project structure
function Item({text, href}:{text:string; href:string}){
  return <NavLink to={href} end={href==="/"} className={({isActive})=>`nav-link ${isActive?"active":""}`}>{text}</NavLink>;
}
export default function SideNav(){
  return (<aside className="sidebar"><nav style={{padding:12}}>
    {Array.isArray(nav) && nav.map(item => (
      <div key={item.text} style={{ marginBottom: 8 }}>
        {!item.children ? (
          <Item text={item.text} href={item.href} />
        ) : (
          <div>
            <div style={{ fontWeight: 600, fontSize: 12, color: "var(--muted)", margin: "8px 0" }}>
              {item.text}
            </div>
            <div>
              {item.children.map(c => (
                <Item key={c.href} text={c.text} href={c.href} />
              ))}
            </div>
          </div>
        )}
      </div>
    ))}
  </nav></aside>);
}