export default function Balls ({
  colors,
  mouseX,
  mouseY,
  bowlX,
  bowlY,
  dragging,
  setDragging
}) {
  return colors.map((color, i) => {
    const x = dragging === i ? mouseX : bowlX + i * 20
    const y = dragging === i ? mouseY : bowlY
    return (
      <circle
        cx={x}
        cy={y}
        r='8'
        onMouseDown={() => setDragging(i)}
        fill={color}
        key={i}
      ></circle>
    )
  })
}
