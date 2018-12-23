import { random } from './helpers'

export const errors = {
  checkbox: ['Checkbox could not control it', 'Checkbox logic is too messy'],
  button: [
    'Button is absent. Someone stole it.',
    'Button is broken. Try again later.'
  ],
  progressBar: [
    'Progress bar is not capable to display all of your progress for now'
  ],
  circularProgress: [
    'The square power of this circle can not be triangulated like that'
  ],
  ethereumAddress: [
    'Can not handle this address',
    'The address does not seem good enough'
  ],
  withdrawForm: ['Withdraw form is broken. You do not deserved that'],
  withdrawBalance: ['Balance not found'],
  withdrawPage: ['Withdraw page can not be displayed. What the heck?!'],
  transactionStatus: [
    'Transaction is lightning fast. Can not trace it.',
    'Transaction is out of here',
    'Sanctions are blocking all transactions. Call WTO!'
  ],
  disclaimer: ['Disclaimer is absent. What happened with it?'],
  qrCode: ['It takes time to draw that pattern without error...'],
  noWavesAddress: ['Waves Address can not be read'],
  copyWidget: [
    'Can not copy address to the memory. Does it have enough space?'
  ],
  balanceRefresh: [
    'Did not like your balance?',
    'The balance does not look fresh, eh?',
    'Was the balance bad?'
  ],
  noLinkToEtherscan: ['Some settings were lost', 'No Etherscan available'],
  historyList: [
    'List was too long and broke the app',
    'Can not calculate everything. How many times you pressed that button?',
    'No more history. All is forgotten. Such a sad..'
  ],

  _default: ['Something went wrong'],
  _unknown: ['Really sad, but error message is also wrong. Sorry.'],

  get: (reason) => random(errors, reason)
}
