import './App.css'
import Products from "./pages/products.tsx";  // Import the Products component

function App() {
    return (
        <div>
            <h1>Welcome to WebMart!</h1>
            <Products />  {/* Use the Products component here */}
        </div>
    )
}

export default App
