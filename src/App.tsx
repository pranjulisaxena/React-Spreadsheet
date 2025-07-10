import TitleBar from "./components/TitleBar"
import MenuBar from "./components/MenuBar"
import Table from "./components/Table"
import TableUp from "./components/TableUP"
import OrdersTabs from "./components/OrdersTab"

const App = () => {
  return (
    <div>
      <TitleBar />
      <MenuBar />
       <TableUp />
      <Table />
      <OrdersTabs />
     
    </div>
  )
}

export default App
