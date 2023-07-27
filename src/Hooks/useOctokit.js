const { Octokit } = require('@octokit/core')

const octokit = new Octokit({
  auth: process.env.REACT_APP_GIT_TOKEN
})

export default octokit