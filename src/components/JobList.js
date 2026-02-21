import { useJobs } from '../contexts/JobsContext';

function JobList() {
  const { jobs, loading, error } = useJobs();

  if (loading) return <p>Loading positions...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className="job-list">
      {jobs.map((job) => (
        <li key={job.id} className="job-item">
          <span className="job-title">{job.title}</span>
          <input className="job-input" type="text" placeholder="Repo here" />
          <button className="job-button" type="button">Apply</button>
        </li>
      ))}
    </ul>
  );
}

export default JobList;
