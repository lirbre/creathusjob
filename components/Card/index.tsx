import { ReactNode } from "react"
interface Props {
  children: ReactNode
  style?: any
  className?: string
}

const Card = ({ children, className = '', style }: Props) => {
  return (
    <div style={style} className={`bg-primary p-4 rounded-xl shadow-md ${className}`}>
      {children}
    </div>
  )
}

export default Card
