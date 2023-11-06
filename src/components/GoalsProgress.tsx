import { Flex, Progress, Typography } from "antd";
import { useContext, useMemo } from "react";
import { FinancialRecordContext } from "../providers/FinancialRecordProvider";

const GoalsProgress = () => {
  const { balance, goals } = useContext(FinancialRecordContext);
  const goalsPercent = useMemo(
    () => ((balance / goals) * 100),
    [balance, goals]
  );

  console.log({
    balance, goals
  });
  
  return (
    <Flex style={{ marginLeft: 'auto' }}>
      <Progress percent={goalsPercent} showInfo={false} style={{ width: '256px' }} ></Progress>
      <Typography.Text style={{ color: "rgba(255, 255, 255, 0.65)" }}>{goalsPercent.toFixed(2)}%</Typography.Text>
    </Flex>
  );
}

export default GoalsProgress;
