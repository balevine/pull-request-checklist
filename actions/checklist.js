const github = require('@actions/github')
const process = require('process')
const octokit = new github.GitHub(process.env.GITHUB_TOKEN)

async function run() {
  const payload = github.context.payload
  const action = payload.action
  const issue = payload.issue
  const repository = payload.repository

  if (action == 'opened') {
    // create an issue comment with a merge checklist
    bodyText = `Before merging this pull request, please check off the following items:  
    -[ ] Tests are written and passing.  
    -[ ] Documentation has been written or updated (internal and external).  
    -[ ] If the feature has a user-facing component, make sure it is backward compatible or that affected users have been notified of the change.  
    -[ ] If possible, solicit feedback from other team members. For workflow changes, a walkthrough/demo is often helpful.  
    
    For checklist items that are not applicable, you can edit this comment and delete those items.`

    octokit.issues.createComment({
      owner: payload.owner,
      repo: repository,
      issue_number: issue.number,
      body: bodyText
    })
  }
}

run()
