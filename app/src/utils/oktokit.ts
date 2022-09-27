import { Octokit } from '@octokit/rest'
import { getAccessTokenLS } from './localstorage'

type GetUsersOctokitParamsProps = {
  q: string
  page?: number
  per_page?: number
  [key: string]: any
}

export const OctokitWithConfig = (accessToken?: string) => {
  return new Octokit({
    auth: accessToken || getAccessTokenLS
  })
}

export const getUsersOctokit = (params: GetUsersOctokitParamsProps, accessToken?: string, ) => {
   return OctokitWithConfig(accessToken).request("GET /search/users", {...params})
}