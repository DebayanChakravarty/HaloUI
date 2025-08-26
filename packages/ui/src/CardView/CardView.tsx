import * as React from "react";
export function CardView<T>({ items, renderItem }:{ items:T[]; renderItem:(item:T,index:number)=>React.ReactNode; }) {
  return <div className="grid-cards">{items.map((it,i)=><div className="panel" key={i}>{renderItem(it,i)}</div>)}</div>;
}