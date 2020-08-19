import { ReactComponent as LogoSvg } from '../CodeFreakLogo.svg'
import * as React from 'react'
import { HTMLProps } from 'react'

const Logo: React.FC<HTMLProps<SVGElement>> = ({ className }) => {
  const classes = 'logo ' + (className ? className : '')
  return <LogoSvg className={classes} />
}

export default Logo