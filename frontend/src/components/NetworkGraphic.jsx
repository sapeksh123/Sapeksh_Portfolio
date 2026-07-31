import { useRef, useState } from "react"
import { motion, useAnimationFrame, useReducedMotion } from "framer-motion"

const PHI = (1 + Math.sqrt(5)) / 2

// The 12 vertices of a regular icosahedron.
const BASE_VERTICES = [
  [-1, PHI, 0], [1, PHI, 0], [-1, -PHI, 0], [1, -PHI, 0],
  [0, -1, PHI], [0, 1, PHI], [0, -1, -PHI], [0, 1, -PHI],
  [PHI, 0, -1], [PHI, 0, 1], [-PHI, 0, -1], [-PHI, 0, 1],
]

function dist3(a, b) {
  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2)
}

// Every vertex pair at the icosahedron's edge length (2, for this construction) is a real edge.
const EDGES = []
for (let i = 0; i < BASE_VERTICES.length; i++) {
  for (let j = i + 1; j < BASE_VERTICES.length; j++) {
    if (Math.abs(dist3(BASE_VERTICES[i], BASE_VERTICES[j]) - 2) < 0.01) {
      EDGES.push([i, j])
    }
  }
}

const ACTIVE_INDICES = [1, 4, 9]

function rotateX([x, y, z], a) {
  const c = Math.cos(a)
  const s = Math.sin(a)
  return [x, y * c - z * s, y * s + z * c]
}

function rotateY([x, y, z], a) {
  const c = Math.cos(a)
  const s = Math.sin(a)
  return [x * c + z * s, y, -x * s + z * c]
}

const TILT = 0.4
const SCALE = 90
const CENTER = 200

function project(angle) {
  return BASE_VERTICES.map((v) => {
    const spun = rotateY(rotateX(v, TILT), angle)
    return { x: CENTER + spun[0] * SCALE, y: CENTER + spun[1] * SCALE, z: spun[2] }
  })
}

/**
 * Decorative rotating wireframe icosahedron for the hero background —
 * true 3D vertices projected to 2D each frame, spun continuously around Y.
 */
export function NetworkGraphic({ className = "" }) {
  const reduceMotion = useReducedMotion()
  const angleRef = useRef(0)
  const [points, setPoints] = useState(() => project(0))

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return
    angleRef.current += delta * 0.00025
    setPoints(project(angleRef.current))
  })

  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <g strokeWidth="1" fill="none">
        {EDGES.map(([a, b], i) => {
          const pa = points[a]
          const pb = points[b]
          const depth = (pa.z + pb.z) / (2 * PHI)
          return (
            <line
              key={i}
              x1={pa.x}
              y1={pa.y}
              x2={pb.x}
              y2={pb.y}
              className="stroke-primary"
              style={{ opacity: 0.12 + 0.18 * (depth + 1) }}
            />
          )
        })}
      </g>
      {points.map((p, i) => {
        const depthT = (p.z / PHI + 1) / 2
        const active = ACTIVE_INDICES.includes(i)
        if (active) {
          return (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={5}
              className="fill-primary"
              animate={reduceMotion ? undefined : { opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            />
          )
        }
        return (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={2 + depthT * 2}
            className="fill-primary"
            style={{ opacity: 0.25 + depthT * 0.35 }}
          />
        )
      })}
    </svg>
  )
}
