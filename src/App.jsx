
import './App.css';

import {NavBarComponent,ItemListCointainerComponent} from "./components";
import {MainLayout} from "./layouts";



function App() {
  
  return (
    
    <MainLayout>
    
     

        <NavBarComponent />
        <ItemListCointainerComponent/>
  
    
    </MainLayout>

    );
  }
  
  export default App;
