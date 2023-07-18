import css from './App.module.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
      {/* { FunctionalComponets } */}
      <Sidebar />
    </div>
  );
}

export default App;
