import { useGlobalContext } from "./utils/context";
import SetupForm from "./components/SetupForm";
import Modal from "./components/Modal";
import Loading from "./components/Loading";

export default function App() {
  const { appState } = useGlobalContext();
  
  if (appState.isLoading) return (
    <Loading />
  )


  return (
    <main>
      {
        appState.isPageModal ? <Modal /> : <SetupForm />
      }
    </main>
  );
}