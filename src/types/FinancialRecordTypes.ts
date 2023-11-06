export interface FinancialRecord {
  date: Date;
  amount: number;
  description: string;
}

export type FinancialRecordList = FinancialRecord[];

export interface FinancialRecordState {
  entity: {
    list: FinancialRecordList
  }
}

export type FinancialRecordActionTypes = 'add_credit_record' | 'add_debt_record';

export type FinancialRecordDispatch = React.Dispatch<FinancialRecordAction<FinancialRecord>>;

export interface FinancialRecordAction<T> {
  type: FinancialRecordActionTypes;
  payload?: T;
}
