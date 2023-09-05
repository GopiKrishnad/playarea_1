import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import Table from './Table';

function App() {
  const [value, setvalue] = useState(new Date());
  const data = [
    {id: 1, name: 'John', age:30},
    {id: 2, name: 'Alice', age:25},
    {id: 3, name: 'Bob', age:35},
    {id: 4, name: 'Bob1', age:35},
  ]
  return (
    <div>
      {/* <DatePicker  value={value} locale="en-GB" clearIcon={null} onChange={(value) => alert('New date is: ', value) } /> */}
    <Table data = {data}/>
    </div>
  );
}

export default App;
