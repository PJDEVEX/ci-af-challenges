// Import necessary modules and components
import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import ContentAPIHooks from './components/ContentAPIHooks';


// App component function
function App() {
  return (
    // Use className to apply CSS classes from App.module.css
    <div className={css.App}>
      {/* Step 1: Render the Sidebar component */}
      <Sidebar />

      {/* Step 2: Render the NavBarForm component */}
      <NavBarForm />

      {/* Step 3: Render the Content component */}
      {/* <Content /> */}

      < ContentAPIHooks />
    </div>
  );
}

// Export the App component
export default App;
