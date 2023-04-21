export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token:  'BQClOlMb_LLrkqHoHeuDAFsnLKxB8oxEQZ5-VIwhlNTP-b-h3eJjE4tvBsvsoqBpm4Pb3QXzTVoMd6IwaH55bxuMaPrttK9K4Ica4IiMhhT_cbLSPyBODzlexEF2BqZb7c03zdby6sln1hQ84SwMwfG0GvM0s18zXtlquNEXPidGe7lnFk7w2rWcMTp7x9O0ojBf7ECK6QJ5YeGIqkmybQ',
}

const reducer = (state, action) => {

    console.log(action);

    // Action -> type, [payload]

    switch (action.type) {

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };

        default:
            return state;
    }
}

export default reducer;