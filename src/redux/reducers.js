const initialState = {
    posts: [],
}

export const tableReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_ALL_POSTS':
            return {
                ...state,
                posts: action.payload,
            }
        case 'FILTER_BY_NAME_AC':
            return {
                ...state,
                posts: state.posts.slice().sort(function (a, b) {
                    let titleA = a.title.toLowerCase(),
                        titleB = b.title.toLowerCase()
                    if (titleA < titleB)
                        return -1
                    if (titleA > titleB)
                        return 1
                    return 0
                }),
            }
        case 'FILTER_BY_NAME_DE':
            return {
                ...state,
                posts: state.posts.slice().sort(function (a, b) {
                    let titleA = a.title.toLowerCase(),
                        titleB = b.title.toLowerCase()
                    if (titleA > titleB)
                        return -1
                    if (titleA < titleB)
                        return 1
                    return 0
                }),
            }
        case 'FILTER_BY_COUNT_AC':
            return {
                ...state,
                posts: state.posts.sort((a, b) => (a.count - b.count)),
            }
        case 'FILTER_BY_COUNT_DEC':
            return {
                ...state,
                posts: state.posts.sort((a, b) => (b.count - a.count)),
            }
        case 'FILTER_BY_DISTANCE_AC':
            return {
                ...state,
                posts: state.posts.slice().sort((a, b) => a.distance - b.distance),
            }
        case 'FILTER_BY_DISTANCE_DEC':
            return {
                ...state,
                posts: state.posts.slice().sort((a, b) => b.distance - a.distance),
            }
        default:
            return state
    }
}