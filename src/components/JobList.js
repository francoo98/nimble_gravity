import { useJobs } from '../contexts/JobsContext';
import JobItem from './JobItem';

function JobList() {
  const { jobs, loading, error } = useJobs();

  if (loading) return <p>Loading positions...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className="job-list">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
}

export default JobList;
