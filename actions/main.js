const github = require('@actions/github')
const process = require('process')
const octokit = new github.GitHub(process.env.GITHUB_TOKEN)

async function run() {
  const payload = github.context.payload
  const issue_number = payload.pull_request.number
  const repo = payload.repository.name
  const owner = payload.repository.owner.login

  // create an issue comment with a merge checklist
  const body = `Thanks for opening a pull request! Before merging this pull request, please check off the following items:  

- [ ] Tests are written and passing.  
- [ ] Documentation has been written or updated (internal and external).  
- [ ] Solicit feedback from other team members. For workflow changes, a walkthrough/demo is often helpful.  
- [ ] The branch has been branch-deployed and tested in production (you've sent some data through it and inspected logs for errors or anomalies).  
- [ ] For user-facing components and features, make sure it is backward compatible (e.g. backfilled database data) or that affected users have been notified of the change.  
    
_For checklist items that are not applicable or possible, you can edit this comment and delete those items._`

  try {
    return octokit.issues.createComment({
      owner,
      repo,
      issue_number,
      body
    })
  } catch (err) {
    return console.log(err)
  }
}

run()
