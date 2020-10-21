import React from 'react'
import { Table } from 'react-bootstrap'
import StandardCard, { StandardCardProps } from '../StandardCard'

import './style.scss'

interface ColumnConfig {
  key: string
  name: string
}

interface TableProps {
  columnConfig: ColumnConfig[]
  dataSource: any[]
}

type TableCardProps = TableProps & StandardCardProps

const DataGridCard: React.FC<TableCardProps> = ({
  header, img, title, footer, columnConfig, dataSource, className: clasName
}) => (
  <StandardCard
    header={header}
    footer={footer}
    title={title}
    img={img}
    className={`data-grid-card ${clasName}`}
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
        {dataSource.map((val, index) => (
          <tr key={index}>
            {columnConfig.map((config, i) => <td key={`${config.key}-${i}`}>{val[config.key]}</td>)}
          </tr>
        ))}
      </tbody>
    </Table>
  </StandardCard>
)

export default DataGridCard
