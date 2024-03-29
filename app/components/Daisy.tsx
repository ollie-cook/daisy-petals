import Petal from "./Petal"

export default function Daisy() {
  const centreSize = "w-[90px] sm:w-[150px]  lg:w-[240px] "
  const petalSize = "w-[30px] sm:w-[50px] lg:w-[80px]"

  return (
    <div className="relative">

      <Petal strokeColour='#767d60' shadowColour='#b5b5b5' className={`${petalSize} absolute bottom-[20%] -left-3/4 translate-x-[calc(50%+10px)] transform -rotate-[78.75deg]`} />
      
      <Petal strokeColour='#767d60' shadowColour='#b5b5b5' className={`${petalSize} absolute -top-full left-1/2 -translate-x-1/2`} />
      <Petal strokeColour='#767d60' shadowColour='#b5b5b5' className={`${petalSize} absolute -left-1/2 -translate-x-1/2 transform -rotate-90`}/>
      <Petal strokeColour='#767d60' shadowColour='#b5b5b5' className={`${petalSize} absolute -bottom-full left-1/2 -translate-x-1/2 transform rotate-180`}/>
      <Petal strokeColour='#767d60' shadowColour='#b5b5b5' className={`${petalSize} absolute -right-1/2 translate-x-1/2 transform rotate-90`} />
      
      <Petal strokeColour='#767d60' shadowColour='#b5b5b5' className={`${petalSize} absolute bottom-3/4 -left-1/2 translate-x-[calc(50%+5px)] transform -rotate-45 translate-y-2.5`} />
      <Petal strokeColour='#767d60' shadowColour='#b5b5b5' className={`${petalSize} absolute top-3/4 -left-1/2 translate-x-[calc(50%+5px)] transform -rotate-[135deg] -translate-y-2.5`} />
      <Petal strokeColour='#767d60' shadowColour='#b5b5b5' className={`${petalSize} absolute top-3/4 -right-1/2 -translate-x-[calc(50%+5px)] transform rotate-[135deg] -translate-y-2.5`} />
      <Petal strokeColour='#767d60' shadowColour='#b5b5b5' className={`${petalSize} absolute bottom-3/4 -right-1/2 -translate-x-[calc(50%+5px)] transform rotate-45 translate-y-2.5`} />
      
      <Petal strokeColour='#767d60' shadowColour='#b5b5b5' className={`${petalSize} absolute bottom-[87.5%] -left-1/4 translate-x-[calc(50%+15px)] transform -rotate-[22.5deg]`} />
      <Petal strokeColour='#767d60' shadowColour='#b5b5b5' className={`${petalSize} absolute bottom-[37.5%] -left-3/4 translate-x-[calc(50%+10px)] transform -rotate-[67.5deg]`} />
      <Petal strokeColour='#767d60' shadowColour='#b5b5b5' className={`${petalSize} absolute -bottom-[37.5%] -left-3/4 translate-x-[calc(50%+10px)] transform -rotate-[112.5deg]`} />
      <Petal strokeColour='#767d60' shadowColour='#b5b5b5' className={`${petalSize} absolute -bottom-[87.5%] -left-1/4 translate-x-[calc(50%+15px)] transform -rotate-[157.5deg]`} />

      <Petal strokeColour='#767d60' shadowColour='#b5b5b5' className={`${petalSize} absolute bottom-[87.5%] -right-1/4 -translate-x-[calc(50%+15px)] transform rotate-[22.5deg]`} />
      <Petal strokeColour='#767d60' shadowColour='#b5b5b5' className={`${petalSize} absolute bottom-[37.5%] -right-3/4 -translate-x-[calc(50%+10px)] transform rotate-[67.5deg]`} />
      <Petal strokeColour='#767d60' shadowColour='#b5b5b5' className={`${petalSize} absolute -bottom-[37.5%] -right-3/4 -translate-x-[calc(50%+10px)] transform rotate-[112.5deg]`} />
      <Petal strokeColour='#767d60' shadowColour='#b5b5b5' className={`${petalSize} absolute -bottom-[87.5%] -right-1/4 -translate-x-[calc(50%+15px)] transform rotate-[157.5deg]`} />

      

      <img src="/daisy-centre.png" alt="daisy" className={`${centreSize} z-10 relative`}/>
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