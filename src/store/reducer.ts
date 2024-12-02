const initState ={
    isDarkTheme: false,
}

export const DARK_THEME = 'DARK_THEME'
export const LIGHT_THEME = 'LIGHT_THEME'

export const ThemeReducer = (state = initState, action) => {
    switch(action.type) {
        case DARK_THEME:
            document.body.classList.toggle("dark");
            return {
                ...state,
                isDarkTheme: true}
        case LIGHT_THEME:
            document.body.classList.toggle("light");

            return {
                ...state,
                isDarkTheme: false}
                
        default: return state
    } 
}

