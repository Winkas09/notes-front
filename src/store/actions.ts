import { LIGHT_THEME, DARK_THEME } from './reducer'

export const switchToDark = () => {
    return {
        type: DARK_THEME,
        
    }
}
export const switchToLight = () => {
    return {
        type: LIGHT_THEME,
    }
}