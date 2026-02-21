import { useJobs } from '../contexts/JobsContext';

function JobList() {
  const { jobs, loading, error } = useJobs();

  if (loading) return <p>Loading positions</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>
          <span>{job.title}</span>
          <input type="text" placeholder="Repo here" />
          <button type="button">Apply</button>
        </li>
      ))}
    </ul>
  );
}

export default JobList;
