import { Octokit } from '@octokit/rest'
import { getAccessTokenLS } from './localstorage'

type GetRepositoriesByUserParamsProps = {
  type?: string,
  sort?: string,
  direction?: string | number,
  per_page?: string | number,
  page?: string | number
}

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

export const getUsersOctokit = (params: GetUsersOctokitParamsProps, accessToken?: string) => {
  return OctokitWithConfig(accessToken)
    .request("GET /search/users", {...params})
}

export const getRepositoriesByUserOctokit = async (userName: string, params?: GetRepositoriesByUserParamsProps) => {
  return await OctokitWithConfig()
    .request(`GET /users/${ userName }/repos`, {...params})
}