import AddPopUp from "./components/AddPopUp";
import EditPopUp from "./components/EditPopUp";
import Header from "./components/Header";
import NotesList from "./components/NoteList";
import AppProvider from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <NotesList/>
        <EditPopUp/>
        <AddPopUp/>
      </div>
    </AppProvider>
  );
}

export default App;
