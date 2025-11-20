import { ExpenseProvider } from "./context/ExpenseContext";
import { Home } from "./pages/Home";



function App() {
  return (
   <ExpenseProvider>
    <Home />
   </ExpenseProvider>
  );
}

export default App;