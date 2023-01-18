import { useState } from "react";
import Card from "../components/Card";
function Main(){
  const [myListCard, setMyListCard] = useState([
    {src: '/assets/discord.png', title: 'Comunidade no discord', href: 'https://discord.gg/Tp4p3n7N69'},
    {src: '/assets/instagram.png', title: 'Perfil no instagram', href: 'https://instagram.com/turing_community'},
    {src: '/assets/youtube.png', title: 'Canal no youtube', href: 'https://www.youtube.com/channel/UClUbjLPoGgk-CGfm9cpdHhA'}
  ])
  return(
    <div className="w-full h-max p-2 flex flex-row flex-wrap gap-4 items-center justify-center sm:justify-evenly">
      {myListCard.map((item, index)=>{
        return <Card item={item} key={index}/>
      })}
    </div>
  )
}

export default Main;