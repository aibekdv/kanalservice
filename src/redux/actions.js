export const getAllPost = (arr) => ({ type: 'GET_ALL_POSTS', payload: arr })
export const filterFromA = () => ({ type: 'FILTER_BY_NAME_AC' })
export const filterFromZ = () => ({ type: 'FILTER_BY_NAME_DE' })
export const filterByCountAc = () => ({ type: 'FILTER_BY_COUNT_AC' })
export const filterByCountDec = () => ({ type: 'FILTER_BY_COUNT_DEC' })
export const filterByDistDec = () => ({ type: 'FILTER_BY_DISTANCE_DEC' })
export const filterByDistAcc = () => ({ type: 'FILTER_BY_DISTANCE_AC' })