import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import RoutesConfig, { RouteProp } from '../@types/RoutesConfig'

import './style.scss'

interface DisplayContainerProps<T extends string | number | symbol> {
  config: RoutesConfig<T>
  className?: string
}

function DisplayContainer<T extends string | number | symbol>({
  config,
  className
}: DisplayContainerProps<T>) {
  const configs = Object.entries<RouteProp>(config)

  return (
    <Container className={`display-container ${className ?? ''}`} fluid>
      <Switch>
        {configs.map((route) => {
          const name = route[0]
          const { path, page } = route[1]

          return (
            <Route
              key={name}
              path={path.startsWith('/') ? path : `/${path}`}
              component={page}
              exact
            />
          )
        })}
      </Switch>
    </Container>
  )
}

export default DisplayContainer
