# Nimble gravity challenge
This is a technical challenge for the full stack position at nimble gravity.
This react app lists job positions at Nimble Gravity and let's you apply submitting your repo with the solution.
# Solution
## Components
The app includes two components:
1. `JobList`: display a list of `JobItem` component.
2. `JobItem`: This component holds the logic to apply for a job.
## State
The state is managed through contexts in `CandidateContext` and `JobsContexts`. These contexts are responsible for fetching data from the API.
# Run project
Start development server: `npm run start`
