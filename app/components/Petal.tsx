'use client'

import { useState } from 'react';
import Draggable from 'react-draggable';

interface PetalProps {
  strokeColour: string;
  shadowColour: string;
  className: string;
}

export default function Petal({ strokeColour, shadowColour, className } : PetalProps) {
  const [dragged, setDragged] = useState(false)

  const handleStop = (e: any) => {
    setDragged(true)
  }

  if (dragged == true) {
    return null
  }

  return (
    <div className={className}>
      <Draggable
        bounds="parent"
        onStop={(e) => handleStop(e)}
      >
        <svg viewBox="0 0 100 300">

        //#region stroke
        <rect x="40" y="0" width = "10" height="10" fill={strokeColour} />
        <rect x="50" y="0" width = "10" height="10" fill={strokeColour} />
        <rect x="60" y="0" width = "10" height="10" fill={strokeColour} />

        <rect x="30" y="10" width = "10" height="10" fill={strokeColour} />
        <rect x="40" y="10" width = "10" height="10" fill={strokeColour} />
        <rect x="60" y="10" width = "10" height="10" fill={strokeColour} />

        <rect x="30" y="20" width = "10" height="10" fill={strokeColour} />
        <rect x="60" y="20" width = "10" height="10" fill={strokeColour} />
        <rect x="70" y="20" width = "10" height="10" fill={strokeColour} />

        <rect x="30" y="30" width = "10" height="10" fill={strokeColour} />
        <rect x="70" y="30" width = "10" height="10" fill={strokeColour} />

        <rect x="20" y="40" width = "10" height="10" fill={strokeColour} />
        <rect x="30" y="40" width = "10" height="10" fill={strokeColour} />
        <rect x="70" y="40" width = "10" height="10" fill={strokeColour} />

        <rect x="20" y="50" width = "10" height="10" fill={strokeColour} />
        <rect x="70" y="50" width = "10" height="10" fill={strokeColour} />
        <rect x="80" y="50" width = "10" height="10" fill={strokeColour} />

        <rect x="20" y="60" width = "10" height="10" fill={strokeColour} />
        <rect x="80" y="60" width = "10" height="10" fill={strokeColour} />

        <rect x="20" y="70" width = "10" height="10" fill={strokeColour} />
        <rect x="80" y="70" width = "10" height="10" fill={strokeColour} />

        <rect x="10" y="80" width = "10" height="10" fill={strokeColour} />
        <rect x="20" y="80" width = "10" height="10" fill={strokeColour} />
        <rect x="80" y="80" width = "10" height="10" fill={strokeColour} />
        <rect x="90" y="80" width = "10" height="10" fill={strokeColour} />

        <rect x="10" y="90" width = "10" height="10" fill={strokeColour} />
        <rect x="90" y="90" width = "10" height="10" fill={strokeColour} />

        <rect x="10" y="100" width = "10" height="10" fill={strokeColour} />
        <rect x="90" y="100" width = "10" height="10" fill={strokeColour} />

        <rect x="10" y="110" width = "10" height="10" fill={strokeColour} />
        <rect x="90" y="110" width = "10" height="10" fill={strokeColour} />

        <rect x="0" y="120" width = "10" height="10" fill={strokeColour} />
        <rect x="90" y="120" width = "10" height="10" fill={strokeColour} />

        <rect x="0" y="130" width = "10" height="10" fill={strokeColour} />
        <rect x="90" y="130" width = "10" height="10" fill={strokeColour} />

        <rect x="0" y="140" width = "10" height="10" fill={strokeColour} />
        <rect x="90" y="140" width = "10" height="10" fill={strokeColour} />

        <rect x="0" y="150" width = "10" height="10" fill={strokeColour} />
        <rect x="90" y="150" width = "10" height="10" fill={strokeColour} />

        <rect x="0" y="160" width = "10" height="10" fill={strokeColour} />
        <rect x="90" y="160" width = "10" height="10" fill={strokeColour} />

        <rect x="0" y="170" width = "10" height="10" fill={strokeColour} />
        <rect x="90" y="170" width = "10" height="10" fill={strokeColour} />

        <rect x="0" y="180" width = "10" height="10" fill={strokeColour} />
        <rect x="90" y="180" width = "10" height="10" fill={strokeColour} />

        <rect x="0" y="190" width = "10" height="10" fill={strokeColour} />
        <rect x="90" y="190" width = "10" height="10" fill={strokeColour} />

        <rect x="0" y="200" width = "10" height="10" fill={strokeColour} />
        <rect x="90" y="200" width = "10" height="10" fill={strokeColour} />

        <rect x="0" y="210" width = "10" height="10" fill={strokeColour} />
        <rect x="10" y="210" width = "10" height="10" fill={strokeColour} />
        <rect x="80" y="210" width = "10" height="10" fill={strokeColour} />
        <rect x="90" y="210" width = "10" height="10" fill={strokeColour} />

        <rect x="10" y="220" width = "10" height="10" fill={strokeColour} />
        <rect x="80" y="220" width = "10" height="10" fill={strokeColour} />

        <rect x="10" y="230" width = "10" height="10" fill={strokeColour} />
        <rect x="80" y="230" width = "10" height="10" fill={strokeColour} />

        <rect x="10" y="240" width = "10" height="10" fill={strokeColour} />
        <rect x="80" y="240" width = "10" height="10" fill={strokeColour} />

        <rect x="10" y="250" width = "10" height="10" fill={strokeColour} />
        <rect x="70" y="250" width = "10" height="10" fill={strokeColour} />
        <rect x="80" y="250" width = "10" height="10" fill={strokeColour} />

        <rect x="20" y="260" width = "10" height="10" fill={strokeColour} />
        <rect x="70" y="260" width = "10" height="10" fill={strokeColour} />

        <rect x="20" y="270" width = "10" height="10" fill={strokeColour} />
        <rect x="70" y="270" width = "10" height="10" fill={strokeColour} />

        <rect x="20" y="280" width = "10" height="10" fill={strokeColour} />
        <rect x="60" y="280" width = "10" height="10" fill={strokeColour} />
        <rect x="70" y="280" width = "10" height="10" fill={strokeColour} />

        <rect x="20" y="290" width = "10" height="10" fill={strokeColour} />
        <rect x="60" y="290" width = "10" height="10" fill={strokeColour} />

        //#endregion

        <rect x="10" y="120" width="10" height="90" fill='white' />
        <rect x="20" y="90" width="10" height="170" fill='white' />
        <rect x="30" y="50" width="10" height="250" fill='white' />
        <rect x="40" y="20" width="20" height="280" fill='white' />
        <rect x="50" y="10" width="10" height="10" fill='white' />
        <rect x="60" y="30" width="10" height="250" fill='white' />
        <rect x="70" y="60" width="10" height="190" fill='white' />
        <rect x="80" y="90" width="10" height="120" fill='white' />

        <rect x="40" y="240" width="10" height="60" fill={shadowColour} />
        <rect x="50" y="180" width="10" height="90" fill={shadowColour} />
        <rect x="60" y="110" width="10" height="110" fill={shadowColour} />
        </svg>
      </Draggable>
    </div>
  )
}

//      <rect x="0" y="0" width="100" height="300" fill='white' />