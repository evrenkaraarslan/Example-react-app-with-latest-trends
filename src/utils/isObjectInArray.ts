export const isObjectInArray = (obj: Record<string, unknown>, arr: any[]): boolean =>
  arr.some((el) => el.id === obj.id)
