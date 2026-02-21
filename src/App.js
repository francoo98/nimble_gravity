import './App.css';
import { CandidateProvider } from './contexts/CandidateContext';
import { JobsProvider } from './contexts/JobsContext';
import JobList from './components/JobList';

function App() {
  return (
    <CandidateProvider email="franco.manuel.dev@gmail.com">
      <div className="page">
        <div className="page-header">
          <h1>Open positions</h1>
        </div>
        <JobsProvider>
          <JobList />
        </JobsProvider>
      </div>
    </CandidateProvider>
  );
}

export default App;
