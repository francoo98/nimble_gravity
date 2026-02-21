import { JobsProvider } from './contexts/JobsContext';
import JobList from './components/JobList';

function App() {
  return (
    <>
      <h1>List of open positions</h1>
      <JobsProvider>
        <JobList />
      </JobsProvider>
    </>
  );
}

export default App;
