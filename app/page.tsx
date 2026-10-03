"use client";
import {useState} from "react";
export default function Home(){
const[q,setQ]=useState("");
const[r,setR]=useState("");
return(
<main style={{background:"black",color:"#39ff14",minHeight:"100vh",padding:"20px",fontFamily:"monospace"}}>
<h1>PromoIA CH - 9</h1>
<p>Generador de promos</p>
<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Ej: Maquillaje, Zapatos..." style={{width:"100%",padding:"12px",background:"#111",color:"white",border:"1px solid #39ff14",borderRadius:"8px",marginTop:"15px"}}/>
<button onClick={()=>setR("Promo para: "+q+" - 1. Llego "+q+" oferta 30% - 2. "+q+" entrega rapida - 3. Pide "+q+" y paga al recibir")} style={{width:"100%",padding:"12px",background:"#39ff14",color:"black",marginTop:"10px",borderRadius:"8px",fontWeight:"bold"}}>Generar Promo</button>
{r&&<pre style={{marginTop:"20px",background:"#111",padding:"15px",whiteSpace:"pre-wrap",borderRadius:"8px",color:"white"}}>{r}</pre>}
</main>
)
}
