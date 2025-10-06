import { StrictMode } from 'react'
import GlobalStyle from './styles/globalStyles';
import { createRoot } from 'react-dom/client'
//import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from "./routes/routes"
import { ThemeContextProvider } from './context/ThemeContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import errorIcon from './assets/error.png'
import warningIcon from './assets/warning.png'
import successIcon from './assets/success.png'
import infoIcon from './assets/info.svg'

//const router = createBrowserRouter(routes);
//<RouterProvider router={router} />
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <GlobalStyle />
      
      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={true} 
        closeOnClick 
        pauseOnFocusLoss
        draggable
        pauseOnHover
        icon={({ type }) => {
          switch (type) {
            case "success":
              return <img src={successIcon} alt="Success Icon" style={{ width: '100%', height: '100%' }} />;
            case "error":
              return <img src={errorIcon} alt="Error Icon" style={{ width: '100%', height: '100%' }} />;
            case "info":
              return <img src={infoIcon} alt="Info Icon" style={{ width: '100%', height: '100%' }} />;
            case "warning":
              return <img src={warningIcon} alt="Warning Icon" style={{ width: '100%', height: '100%' }} />;
            case "default":
              return "🔔";
            case "loading":
              return "⏳";
            default:
              return "🔔";
          }
        }}
      />
    </ThemeContextProvider>
  </StrictMode>,
);
