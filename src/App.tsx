import "./App.css";
import Sidebar from "./sidebar.tsx";
import Body from "./body.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex w-full h-screen">
        <Sidebar />

        <Body />

        
      </div>
    </>
  );
}

export default App;
