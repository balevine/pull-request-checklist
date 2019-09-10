const github = require('@actions/github')
const process = require('process')
const octokit = new github.GitHub(process.env.PERSONAL_GITHUB_TOKEN)

async function run() {
  const payload = github.context.payload
  const pull_request_number = payload.pull_request.number
  const repo = payload.repository.name
  const owner = payload.repository.owner.login

  // create an issue comment with a merge checklist
  const bodyText = `Thanks for opening a pull request! Before merging this pull request, please check off the following items:  
    -[ ] Tests are written and passing.  
    -[ ] Documentation has been written or updated (internal and external).  
    -[ ] If the feature has a user-facing component, make sure it is backward compatible or that affected users have been notified of the change.  
    -[ ] If possible, solicit feedback from other team members. For workflow changes, a walkthrough/demo is often helpful.  
    -[ ] If possible, the branch has been branch-deployed and tested in production (you've sent some data through it and inspected logs for errors or anomalies).
    
    For checklist items that are not applicable, you can edit this comment and delete those items.`

  try {
    return octokit.issues.createComment({
      owner,
      repo,
      pull_request_number,
      bodyText
    })
  } catch (err) {
    return console.log(err)
  }
}

run()
