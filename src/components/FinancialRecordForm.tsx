import { ChangeEvent, MouseEvent, useState } from 'react'
import { FinancialRecord } from '../types/FinancialRecordTypes';
import { Flex, Form, Input, InputNumber, Modal, Space, Typography } from 'antd';

interface FinancialRecordFormProps {
  shown: boolean;
  title?: string;
  onSave: (p: FinancialRecord) => void;
  onCancel: () => void;
}

const FinancialRecordForm = ({ shown, title, onSave, onCancel }: Readonly<FinancialRecordFormProps>) => {
  const [amount, setDepositAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [amountError, setAmountError] = useState<'error' | ''>('');

  const handleClickSave = (record: FinancialRecord, e: MouseEvent<HTMLButtonElement, any>) => {
    e.preventDefault();
    if (!amount || isNaN(amount)) {
      setAmountError('error');
      return;
    }

    onSave({
      amount,
      description,
      date: new Date(),
    });
  }

  const handleClickCancel = (e: MouseEvent<HTMLButtonElement, any>) => {
    e.preventDefault();
    onCancel();
  }

  const handleChangeAmount = (value: number | null) => {
    if (value && value > 0) {
      setDepositAmount(+value);
      setAmountError('');
    } 
    else {
      setAmountError('error');
    }
  }

  const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value || 'Deposit');
  }
  
  return (
    <Modal 
      open={shown}
      title={title}
      onOk={(e: MouseEvent<HTMLButtonElement, any>) => handleClickSave({ amount, description, date: new Date() }, e)}
      onCancel={handleClickCancel}
      afterClose={() => {
        setTimeout(() => {
          setDepositAmount(0);
          setAmountError('');
        }, 1);
      }}
      okButtonProps={{ size: 'large' }}
      cancelButtonProps={{ size: 'large' }}
      okText={'Save'}
    >
      <Form className="flex flex-col">
        <Space direction='vertical' style={{ width: '100%' }}>
          <Flex vertical>
            <InputNumber status={amountError} value={amount} placeholder='Amount' onChange={handleChangeAmount} width={'100%'} style={{ width: '100%' }} size='large' prefix="$" autoFocus />
            {amountError === 'error' && <Typography.Text type='danger'>Amount is required</Typography.Text>}
          </Flex>
          <Input type="text" placeholder="Description" onChange={handleChangeDescription} width={'100%'} size='large' />
        </Space>
      </Form>
    </Modal>
  );
}

export default FinancialRecordForm;
