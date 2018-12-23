export const random = (list, type = '_default') => {
  const messages = list[type] || list['_unknown']
  const random = Math.floor(Math.random() * Math.floor(messages.length))
  return messages[random]
}
