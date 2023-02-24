export const isEmptyObject = (obj: Record<string, unknown>): boolean => JSON.stringify(obj) === '{}'
