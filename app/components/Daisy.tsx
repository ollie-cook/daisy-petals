import Petal from "./Petal"

export default function Daisy() {
  const petalSize = "w-[100px]"

  return (
    <div className="relative">
      
      <div className={`${petalSize} absolute -top-full left-1/2 -translate-x-1/2`}>
        <Petal strokeColour='#767d60' shadowColour='#b5b5b5' />
      </div>
      <div className="w-[100px] absolute -left-1/2 -translate-x-1/2 transform -rotate-90">
        <Petal strokeColour='#767d60' shadowColour='#b5b5b5' />
      </div>
      <div className="w-[100px] absolute -bottom-full left-1/2 -translate-x-1/2 transform rotate-180">
        <Petal strokeColour='#767d60' shadowColour='#b5b5b5' />
      </div>
      <div className="w-[100px] absolute -right-1/2 translate-x-1/2 transform rotate-90">
        <Petal strokeColour='#767d60' shadowColour='#b5b5b5' />
      </div>
      
      <div className="w-[100px] absolute bottom-3/4 -left-1/2 translate-x-[calc(50%+5px)] transform -rotate-45 translate-y-2.5">
        <Petal strokeColour='#767d60' shadowColour='#b5b5b5' />
      </div>
      <div className="w-[100px] absolute top-3/4 -left-1/2 translate-x-[calc(50%+5px)] transform -rotate-[135deg] -translate-y-2.5">
        <Petal strokeColour='#767d60' shadowColour='#b5b5b5' />
      </div>
      <div className="w-[100px] absolute top-3/4 -right-1/2 -translate-x-[calc(50%+5px)] transform rotate-[135deg] -translate-y-2.5">
        <Petal strokeColour='#767d60' shadowColour='#b5b5b5' />
      </div>
      <div className="w-[100px] absolute bottom-3/4 -right-1/2 -translate-x-[calc(50%+5px)] transform rotate-45 translate-y-2.5">
        <Petal strokeColour='#767d60' shadowColour='#b5b5b5' />
      </div>
      
      <img src="/daisy-centre.png" alt="daisy" className="w-[90px] sm:w-[300px] z-10 relative"/>
    </div>
  )
}

//'use client'

//import Draggable from 'react-draggable';

{/*
<Draggable
      bounds="parent"
      onStop={(e) => handleStop(e)}
    >
      <div className="bg-green-300 w-fit">
        i'm a flower
      </div>
    </Draggable>
  */}

  //<Petal strokeColour='#767d60' shadowColour='#b5b5b5' />