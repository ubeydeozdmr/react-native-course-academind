import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post(
    'https://react-native-course-cc331-default-rtdb.europe-west1.firebasedatabase.app/expenses.json',
    expenseData,
  );
}
