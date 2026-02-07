import logo from './logo.svg';
import './App.css';
import Item from './components/Item'
import ItemDate from './components/ItemDate'

function App() {

  const response = [
    {
      itemId: 1,
      itemName: "Laptop",
      itemDate: 12,
      itemMonth: "January",
      itemYear: 2025
    },
    {
      itemId: 2,
      itemName: "Mobile Phone",
      itemDate: 25,
      itemMonth: "February",
      itemYear: 2024
    },
    {
      itemId: 3,
      itemName: "Headphones",
      itemDate: 7,
      itemMonth: "March",
      itemYear: 2023
    },
    {
      itemId: 4,
      itemName: "Smart Watch",
      itemDate: 19,
      itemMonth: "April",
      itemYear: 2022
    }
  ];

  return (
    <div className="App">

      <Item  itemName={response[0].itemName} >gihi</Item>

      <ItemDate
        day={response[0].itemDate}
        month={response[0].itemMonth}
        year={response[0].itemYear}
      />

      <Item itemName={response[1].itemName} />
      <ItemDate
        day={response[1].itemDate}
        month={response[1].itemMonth}
        year={response[1].itemYear}
      />

      <Item itemName={response[2].itemName} />
      <ItemDate
        day={response[2].itemDate}
        month={response[2].itemMonth}
        year={response[2].itemYear}
      />

    </div>
  );
}

export default App;
