import { Button, Form, InputNumber, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { formatCurrency } from "../helpers";

interface GoalsFormProps {
  existingGoals: number;
  onSave: (newValue: number) => void;
}

const GoalsForm = ({ onSave, existingGoals }: Readonly<GoalsFormProps>) => {
  const [newGoals, setNewGoals] = useState<number>(existingGoals);
  const handleClickSave = () => {
    onSave(newGoals)
  }

  const handleChangeGoals = (value: number | null) => {
    setNewGoals(value ?? 0);
  }

  return (
    <Space direction="vertical">
      <Title level={4}>
        Set Goals
      </Title>

      <Form>
        <Space direction="vertical" style={{ width: '100%' }}>
          <InputNumber defaultValue={newGoals} prefix={'$'} style={{ width: '100%' }} size="large" placeholder="Goals amount" onChange={handleChangeGoals} />
          <Typography.Text type="success">Existing goals: {formatCurrency(existingGoals)}</Typography.Text>
          <Button type="primary" onClick={handleClickSave} size="large">Save</Button>
        </Space>
      </Form>
    </Space>
  );
}

export default GoalsForm;
