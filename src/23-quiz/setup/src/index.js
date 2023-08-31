import { AppProvider } from "./utils/context";
import App from "./App";
import "./index.css";



export default function Quiz() {
  return (
    <AppProvider>
      <App />
    </AppProvider> 
  );
}