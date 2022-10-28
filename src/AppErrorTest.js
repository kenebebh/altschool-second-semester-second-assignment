import One from "../src/pages/One";
import Two from "../src/pages/Two";
import Three from "../src/pages/Three";
import "./App.css";
import ErrorBoundary from "./pages/ErrorBoundary";

function AppErrorTest() {
  return (
    <div className="App">
      <p>components</p>
      <ErrorBoundary>
        <One />
        <Two />
        <Three />
      </ErrorBoundary>
    </div>
  );
}

export default AppErrorTest;
