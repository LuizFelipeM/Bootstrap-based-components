import React from 'react'
import { Table } from 'react-bootstrap'
import StandardCard, { StandardCardProps } from '../StandardCard'

import './style.scss'

interface ColumnConfig<T> {
  key: keyof T
  name: string
}

interface TableProps<T> {
  columnConfig: ColumnConfig<T>[]
  dataSource: T[]
  onClick?: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>, data: T) => void
}

type TableCardProps<T> = TableProps<T> & StandardCardProps

function DataGridCard<T>({
  header, img, title, footer, columnConfig, dataSource, className, onClick
}: TableCardProps<T>) {
  return (
    <StandardCard
      header={header}
      footer={footer}
      title={title}
      img={img}
      className={`data-grid-card ${className ?? ''}`}
    >
      <Table striped borderless hover>
        <thead>
          <tr>
            {columnConfig.map((column, index) => (
              <th
                key={index}
                className={`table-header identifier-${column.key}`}
              >
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((data, index) => (
            <tr
              key={index}
              className={onClick ? 'clickable' : undefined}
              onClick={onClick ? (e) => onClick(e, data) : undefined}
            >
              {columnConfig.map((config, i) => <td key={`${config.key}-${i}`}>{data[config.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </Table>
    </StandardCard>
  )
}

export default DataGridCard
