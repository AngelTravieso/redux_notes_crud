import { Provider } from "react-redux";

import { AppRouter } from "./router/AppRouter";
import { store } from "./store/store";
import { AppTheme } from "./theme/AppTheme";


export const ReduxCrudApp = () => {
  return (
    <AppTheme>
      <Provider store={ store }>
        <AppRouter />
      </Provider>
    </AppTheme>
  )
}
