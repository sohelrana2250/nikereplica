
import './App.css';
import routes from './Router/router';

import { RouterProvider } from "react-router-dom";
import AuthProvider from './components/AuthProvider/AuthProvider';
// hsoting link: https://6537a4f137a6191b020735c4--lighthearted-babka-4cfc26.netlify.app/
function App() {
  return (
    <div className="">
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>



    </div>
  );
}

export default App;
