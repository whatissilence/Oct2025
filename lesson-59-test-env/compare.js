
export function compareObjects(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  return Object.keys(obj1).every(objKey1 =>
    typeof obj1[objKey1] === typeof obj2[objKey1] &&
    (
      typeof obj1[objKey1] === 'string'
        ? obj1[objKey1].toLowerCase() === obj2[objKey1].toLowerCase()
        : obj1[objKey1] === obj2[objKey1]
    )
  )
}