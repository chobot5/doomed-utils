const isAfterOrEqual = (date: Date, dateToCompare: Date) => {
  return date.getTime() >= dateToCompare.getTime()
}

export default isAfterOrEqual
