import { aws } from './aws'
import { common } from './common'

const _settings = {
  development: {
    siteName: `${common.siteName} (Development)`,
    siteWarning: 'Work in progress'
  },
  staging: {
    siteName: `${common.siteName} (Staging)`,
    siteWarning: 'Work in progress'
  },
  production: {
  }
}

const settings = Object.assign(
  {},
  aws,
  common,
  _settings[process.env.NODE_ENV]
)

export default settings

export { aws } from './aws'
export { errors } from './errors'
export { messages } from './messages'
