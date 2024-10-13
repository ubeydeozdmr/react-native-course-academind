import { View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    title: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e3',
    title: 'Some bananas',
    amount: 5.99,
    date: new Date('2021-12-01'),
  },
  {
    id: 'e4',
    title: 'A book',
    amount: 14.99,
    date: new Date('2022-02-19'),
  },
  {
    id: 'e5',
    title: 'Another book',
    amount: 18.59,
    date: new Date('2022-02-18'),
  },
];

function ExpensesOutput({ expenses, periodName }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
