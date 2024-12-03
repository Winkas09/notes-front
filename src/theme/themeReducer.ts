export const initialState = {
    isDarkTheme: false,
  };
  
  export const themeReducer = (state, action) => {
    switch (action.type) {
      case 'DARK_THEME':
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        return {
          ...state,
          isDarkTheme: true,
        };
      case 'LIGHT_THEME':
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        return {
          ...state,
          isDarkTheme: false,
        };
      default:
        return state;
    }
  };