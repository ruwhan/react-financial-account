import { Col, Flex, Row, message } from "antd";
import AppLayout from "../components/AppLayout";
import { useContext } from "react";
import { FinancialRecordContext } from "../providers/FinancialRecordProvider";
import GoalsForm from "../components/GoalsForm";

const Goals = () => {
  const { goals, setGoals } = useContext(FinancialRecordContext);
  const [messageApi, contextHolder] = message.useMessage();
  const handleSave = (newGoals: number) => {
    setGoals(newGoals);
    messageApi.success('Goals updated!');
  }

  return (
    <AppLayout>
      {contextHolder}
      <Row>
        <Col span={12} offset={6}>
          <Flex vertical>
            <GoalsForm existingGoals={goals} onSave={handleSave} />
          </Flex>
        </Col>
      </Row>
    </AppLayout>
  );
}

export default Goals;
