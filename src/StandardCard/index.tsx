import React from 'react'
import { Card } from 'react-bootstrap'

import './style.scss'

const {
  Header, Body, Footer, Title, Img
} = Card

type CommonTypes = string | number | React.ReactNode

export interface StandardCardProps {
  header?: CommonTypes
  footer?: CommonTypes
  title?: CommonTypes
  img?: string
  className?: string
}

const StandardCard: React.FC<StandardCardProps> = ({
  header, img, title, footer, children, className
}) => (
  <Card className={`standard-card ${className ?? ''}`}>
    {header && <Header className="standard-card-header" as="h4">{header}</Header>}
    <Body className="standard-card-body">
      {img && <Img className="standard-card-img" variant="top" src={img} />}
      {title && <Title className="standard-card-title">{title}</Title>}
      {children}
      {footer && <Footer className="standard-card-footer">{footer}</Footer>}
    </Body>
  </Card>
)

export default StandardCard
