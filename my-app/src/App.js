import Navbar from './components/Navbar/navbar.js'
import Product from './components/Product/product.js'

function App() {
  return (
    <div>
      <div>
      <Navbar></Navbar>
    </div>
    <div className = 'container1'>
      <Product></Product>
    </div>
    </div>
    
  );
}

export default App;
