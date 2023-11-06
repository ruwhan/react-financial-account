import { useContext } from "react";
import { FinancialRecordContext } from "../providers/FinancialRecordProvider";
import { Flex, Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { FinancialRecord } from "../types/FinancialRecordTypes";
import { formatCurrency } from "../helpers";

const columns: ColumnsType<FinancialRecord> = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (date: Date) => new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date),
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Credit',
    dataIndex: 'amount',
    // key: 'credit',
    align: 'right',
    render: (amount) => amount > 0 ? <Typography.Text type="success">{formatCurrency(amount)}</Typography.Text> : ''
  },
  {
    title: 'Debt',
    dataIndex: 'amount',
    // key: `debt_${date}`,
    align: 'right',
    render: (amount) => amount < 0 ? <Typography.Text type="danger">{formatCurrency(amount)}</Typography.Text> : ''
  },
]

const FinancialRecordTable = () => {
  const { state } = useContext(FinancialRecordContext);
  const { entity: { list } } = state;
  return (
    <Flex style={{ marginTop: '1rem' }}>
      <Table dataSource={list} columns={columns} style={{ width: '100%' }}></Table>
    </Flex>
  );
}

export default FinancialRecordTable;
