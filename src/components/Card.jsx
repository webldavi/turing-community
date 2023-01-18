import Button from "./Button";

function Card({item}){
  return(
    <div className="w-max h-max  flex flex-col gap-2 p-4 rounded-3xl border border-[#A3A3A3] bg-[#2e3032]/30">
      <img src={item.src} className="w-64 h-64 rounded-3xl"/>
      <span className="text-lg font-bold font-mono text-white">{item.title}</span>
      <Button onClick={()=>window.open(item.href, "_blank")}/>
    </div>
  )
}

export default Card;