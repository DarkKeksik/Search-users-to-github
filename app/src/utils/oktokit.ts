import { Octokit } from '@octokit/rest'
import { getAccessTokenLS } from './localstorage'

export const OctokitWithConfig = (accessToken?: string) => {
  return new Octokit({
    auth: accessToken || getAccessTokenLS
  })
}