export const convertingTypes = (type, value) => {
  switch(type) {
    case 'number':
      return Number(value)
    default:
      return value
  }
}
