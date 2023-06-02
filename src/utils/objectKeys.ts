const objectKeys = <T extends {}>(obj: T): (keyof T)[] => Object.keys(obj) as (keyof T)[]

export default objectKeys
