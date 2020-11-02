import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface RouteProp {
  path: string
  name: string
  page: React.FC<any>
  icon?: IconProp
  exact?: boolean
  hideSideMenu?: boolean
  hideOnSideMenu?: boolean
  routes?: RouteProp[]
}

type RoutesConfig<T extends string | number | symbol> = { [P in T]: RouteProp; }

export default RoutesConfig
