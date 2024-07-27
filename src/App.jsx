import "primereact/resources/themes/arya-blue/theme.css";           //theme
import "primeflex/primeflex.css";                                  //core css
import "primeicons/primeicons.css";                                //icons
import Paths from "./routes/Paths";
import { AuthContext } from "./contexts/AuthContext";




const App = () => {


  return ( 


    <>  
      <AuthContext>
        <Paths />
      </AuthContext>
      
    </>
   );
}
 
export default App;