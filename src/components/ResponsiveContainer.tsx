import React, { HTMLProps } from 'react'

import './ResponsiveContainer.less'
import { RowProps } from 'antd/lib/row'
import { Row } from 'antd'

export type ResponsiveContainerProps = HTMLProps<HTMLDivElement>
const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  ...divProps
}) => (
  <div className="container" {...divProps}>
    {children}
  </div>
)

export const ResponsiveRow: React.FC<RowProps> = ({
  className,
  ...rowProps
}) => (
  <Row className={'container ' + (className ? className : '')} {...rowProps} />
)

export default ResponsiveContainer
