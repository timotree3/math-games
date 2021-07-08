import { useState } from 'react'
import './App.css'

function App () {
  const [tilt, setTilt] = useState(0)
  const [radius, setRadius] = useState(105)
  const leftRadians = ((180 - tilt) / 360) * 2 * Math.PI
  const defaultLeftRadians = (180 / 360) * 2 * Math.PI
  const computedLeftX = Math.cos(leftRadians)
  const defaultLeftX = Math.cos(defaultLeftRadians)
  const leftX = (computedLeftX - defaultLeftX) * radius
  const leftY =
    (Math.sin(((180 - tilt) / 360) * 2 * Math.PI) -
      Math.sin((180 / 360) * 2 * Math.PI)) *
    radius
  const rightRadians = ((0 - tilt) / 360) * 2 * Math.PI
  const defaultRightRadians = (0 / 360) * 2 * Math.PI
  const computedRightX = Math.cos(rightRadians)
  const defaultRightX = Math.cos(defaultRightRadians)
  const rightX = (computedRightX - defaultRightX) * radius
  const rightY =
    (Math.sin(((0 - tilt) / 360) * 2 * Math.PI) -
      Math.sin((0 / 360) * 2 * Math.PI)) *
    radius
  return (
    <div>
      <svg viewBox='0 0 640 480' xmlns='http://www.w3.org/2000/svg'>
        <g fill='#e4b04a' stroke='#3c6231'>
          <path d='m231.89 360.75h176.79s-60.527-10.812-77.5-33.214c-5.5108-7.2737 0.73831-18.099 0.42859-27.143l-6.5-189.79h-8.9286l-6.5 189.79c-0.30969 9.0424 5.645 19.896 0.071381 27.143-17.202 22.365-77.857 33.214-77.857 33.214z' />

          <g transform={`translate(${leftX} ${-leftY})`}>
            <path d='m151.5 256.11h122.86c-11.078 11.007-22.993 22.218-38.404 26.791-18.96 5.6259-40.148 4.7179-57.74-4.7326-10.226-5.4934-20.478-12.011-26.713-22.058z' />
            <g strokeWidth='6'>
              <path d='m158.82 257.18l57.143-155' />
              <path d='m267.04 258.43l-57.143-155' />
            </g>
          </g>

          <g transform={`translate(${rightX} ${-rightY})`}>
            <path d='m366.21 256.11h122.86c-11.078 11.007-22.993 22.218-38.404 26.791-18.96 5.6259-40.148 4.7179-57.74-4.7326-10.226-5.4934-20.478-12.011-26.713-22.058z' />
            <g strokeWidth='6'>
              <path d='m373.54 257.18l57.143-155' />
              <path d='m481.75 258.43l-57.143-155' />
            </g>
          </g>

          <path
            d='m440.76 112.54h-240.96l-1.4286-13.929c-0.083588-0.81461 0.11215-1.8827 0.80357-2.3214 0.70767-0.449 1.6632 0.31366 2.5 0.26785 29.973-1.0006 57.968-20.911 88.304-15.804 7.235 1.2181 13.471 3.8649 18.75 8.9286 0.65231 0.6571 1.9643 1.9643 1.9643 1.9643 2.7398 2.7398 3.8119-1.1162 5-4.6428 2.3236-7.6498 4.0861-42.5 4.5861-42.5s2.2625 34.85 4.5862 42.5c1.1881 3.5267 2.2602 7.3826 5 4.6428 0 0 1.312-1.3072 1.9643-1.9643 4.9372-5.5055 11.668-7.998 18.75-8.9286 29.935-3.9332 58.808 11.72 88.304 15.804 0.83685 0.045807 1.7923-0.71686 2.5-0.26785 0.69144 0.43872 0.88718 1.5068 0.80359 2.3214l-1.4286 13.929z'
            transform={`rotate(${tilt} 321 110)`}
          />
        </g>
        <circle cx='321' cy='110' r='1' />
      </svg>
      <input
        type='range'
        min='-90'
        max='90'
        value={tilt}
        onChange={event => setTilt(event.target.value)}
      />
      <input
        type='range'
        min='0'
        max='400'
        value={radius}
        onChange={event => setRadius(event.target.value)}
      />
      Tilt: {tilt} Radius: {radius}
    </div>
  )
}

export default App
