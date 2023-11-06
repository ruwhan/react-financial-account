import { MouseEvent, useContext, useState } from "react";
import FinancialRecordForm from "../components/FinancialRecordForm";
import { FinancialRecordContext } from "../providers/FinancialRecordProvider";
import { FinancialRecord } from "../types/FinancialRecordTypes";
import { Button, Col, Row, Space } from "antd";
import FinancialRecordTable from "../components/FinancialRecordTable";
import Title from "antd/es/typography/Title";
import AppLayout from "../components/AppLayout";

const Home = () => {
  const { dispatch } = useContext(FinancialRecordContext)
  const [depositShown, setDepositShown] = useState<boolean>();
  const [withdrawShown, setWithdrawShown] = useState<boolean>();
  const handleClickDeposit = (event: MouseEvent<HTMLButtonElement, any>): void => {
    setDepositShown(true);
  }

  const handleClickWithdraw = (event: MouseEvent<HTMLButtonElement, any>): void => {
    setWithdrawShown(true);
  }

  const handleSaveDeposit = (payload: FinancialRecord) => {
    dispatch({
      type: 'add_credit_record',
      payload
    });
    setDepositShown(false);
  }

  const handleCancelDeposit = () => {
    setDepositShown(false);
  }

  const handleSaveWithdrawal = (payload: FinancialRecord) => {
    dispatch({
      type: 'add_debt_record',
      payload: {
        ...payload,
        amount: -payload.amount
      }
    });
    setWithdrawShown(false);
  }

  const handleCancelWithdrawal = () => {
    setWithdrawShown(false);
  }
  
  return (
    <AppLayout>
      <Row>
        <Col span={12} offset={6}>
          <Title level={4} className="text-3xl font-bold underline">
            Financial Record
          </Title>
          <Space>
            <Button type="primary" onClick={handleClickDeposit} size="large">Deposit</Button>
            <Button onClick={handleClickWithdraw} size="large">Withdraw</Button>
          </Space>
          <FinancialRecordTable />
        </Col>
      </Row>
      
      <div>
        <FinancialRecordForm
          shown={Boolean(depositShown)}
          title="Deposit"
          onSave={handleSaveDeposit}
          onCancel={handleCancelDeposit}
        />

        <FinancialRecordForm
          shown={Boolean(withdrawShown)}
          title="Withdraw"
          onSave={handleSaveWithdrawal}
          onCancel={handleCancelWithdrawal}
        />
      </div>
    </AppLayout>
  );
}

export default Home;
