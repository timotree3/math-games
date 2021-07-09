export default function Bowl (props) {
  return (
    <g>
      {(props.ballColors ?? []).map((color, i) => (
        <circle cx={i * 20 + 175} cy={253} r='8' fill={color} key={i} />
      ))}
      <g strokeWidth='6'>
        <path d='m158.82 257.18l57.143-155' />
        <path d='m267.04 258.43l-57.143-155' />
      </g>
      <path d='m151.5 256.11h122.86c-11.078 11.007-22.993 22.218-38.404 26.791-18.96 5.6259-40.148 4.7179-57.74-4.7326-10.226-5.4934-20.478-12.011-26.713-22.058z' />
    </g>
  )
}