import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ReactNode } from 'react'
import { Nav } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import RoutesConfig, { RouteProp } from '../@types/RoutesConfig'

import './style.scss'

interface SideMenuProps<T extends string | number | symbol> {
  routeConfig: RoutesConfig<T>
  className?: string
  children?: ReactNode
}

const { Item } = Nav

function SideMenu<T extends string | number | symbol>({
  routeConfig,
  className,
  children
}: SideMenuProps<T>) {
  const { pathname } = useLocation()
  const configs = Object.entries<RouteProp>(routeConfig)

  const showMenu = configs
    .filter(([_, { hideSideMenu }]) => hideSideMenu)
    .find(([_, { path }]) => pathname.match(path.startsWith('/') ? path : `/${path}`))

  return (!showMenu
    ? (
      <Nav className={`flex-column side-menu ${className ?? ''}`}>
        <Item className="side-menu-item logo">
          <Link to="/">
            {children}
          </Link>
        </Item>
        {configs
          .filter((config) => !config[1].hideOnSideMenu)
          .map((config) => {
            const { path, name, icon } = config[1]
            const isSelected = pathname.includes(path)
            const routePath = path.startsWith('/') ? path : `/${path}`

            return (
              <Item
                key={config[0]}
                className={`side-menu-item ${config[0]} ${isSelected ? 'selected' : ''}`}
              >
                <Link className="side-menu-link" to={routePath}>
                  {icon && <FontAwesomeIcon className="side-menu-icon" icon={icon} size="lg" />}
                  <span className="side-menu-name">{name}</span>
                </Link>
                {isSelected && <span className="side-menu-selectedbar" />}
              </Item>
            )
          })}
      </Nav>
    ) : null
  )
}

export default SideMenu
