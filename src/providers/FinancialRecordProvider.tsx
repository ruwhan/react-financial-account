import { Reducer, createContext, useMemo, useReducer, useState } from "react";
import { FinancialRecord, FinancialRecordAction, FinancialRecordDispatch, FinancialRecordState } from "../types/FinancialRecordTypes";

const initialState: FinancialRecordState = { entity: { list: [] } }

function reducer<T>(state: FinancialRecordState, action: FinancialRecordAction<T | undefined>) {
  
  switch (action.type) {
    case 'add_credit_record':
      return {
        ...state,
        entity: {
          list: action.payload ? [
            ...state.entity.list,
            action.payload
          ] : [
            ...state.entity.list
          ]
        }
      }

    case 'add_debt_record':
      return {
        ...state,
        entity: {
          list: action.payload ? [
            ...state.entity.list,
            action.payload
          ] : [
            ...state.entity.list
          ]
        }
      }
  
    default:
      return {
        ...state
      }
  }
}

export const FinancialRecordContext = createContext<{ 
  state: FinancialRecordState, 
  dispatch: FinancialRecordDispatch,
  goals: number,
  setGoals: (value: number) => void;
  balance: number;
}>({ 
  state: initialState, 
  dispatch: () => {}, 
  goals: 1, 
  setGoals: () => {},
  balance: 0,
});

const FinancialRecordProvider = ({children}: { children: JSX.Element | React.ReactNode }) => {
  const [state, dispatch] = 
    useReducer<
      Reducer<
        FinancialRecordState, FinancialRecordAction<FinancialRecord>
      >
    >(reducer, initialState);
  const [goals, setGoals] = useState<number>(1);
  const balance: number = useMemo(
    () => state.entity.list.map((item) => item.amount).reduce((sum, n) => (sum += n), 0),
    [state.entity.list]
  );
    
  return (
    <FinancialRecordContext.Provider value={{ state, dispatch, goals, setGoals, balance }}>
      {children}
    </FinancialRecordContext.Provider>
  );
}

export default FinancialRecordProvider;
