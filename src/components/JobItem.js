import { useState } from 'react';
import { useCandidate } from '../contexts/CandidateContext';

const API_URL =
  'https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net/api/candidate/apply-to-job';

function JobItem({ job }) {
  const { candidate } = useCandidate();
  const [repoUrl, setRepoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [applied, setApplied] = useState(false);
  const [error, setError] = useState(null);

  async function handleApply() {
    if (!repoUrl.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uuid: candidate.uuid,
          jobId: job.id,
          candidateId: candidate.candidateId,
          repoUrl: repoUrl.trim(),
        }),
      });

      if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

      const data = await res.json();
      if (data.ok) setApplied(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <li className={`job-item${applied ? ' job-item--applied' : ''}`}>
      <span className="job-title">{job.title}</span>

      {applied ? (
        <span className="job-applied">Applied!</span>
      ) : (
        <>
          <input
            className="job-input"
            type="text"
            placeholder="Repo URL"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            disabled={loading}
          />
          <button
            className="job-button"
            type="button"
            onClick={handleApply}
            disabled={loading || !repoUrl.trim()}
          >
            {loading ? 'Applying...' : 'Apply'}
          </button>
        </>
      )}

      {error && <span className="job-error">{error}</span>}
    </li>
  );
}

export default JobItem;
