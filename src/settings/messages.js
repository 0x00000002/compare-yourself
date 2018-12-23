import { random } from './helpers'

export const messages = {
  ethereumAddress: [
    'Checkbox could not control it',
    'Checkbox logic is too messy'
  ],

  _default: ['Something went wrong'],
  _unknown: ['Really sad, but error message is also wrong. Sorry.'],

  get: (message) => random(messages, message)
}
