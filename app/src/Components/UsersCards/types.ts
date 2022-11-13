// @TODO need fix type
export type StoreProps = [
  [GithubUserProps],
  number,
  {[key: string]: string},
  boolean
]

export type GithubUserProps = {
  login?: string,
  node_id?: string,
  avatar_url?: string,
  html_url?: string
  [key: string]: string
}