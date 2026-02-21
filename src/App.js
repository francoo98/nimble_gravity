import './App.css';
import { JobsProvider } from './contexts/JobsContext';
import JobList from './components/JobList';

function App() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Open positions</h1>
      </div>
      <JobsProvider>
        <JobList />
      </JobsProvider>
    </div>
  );
}

export default App;
