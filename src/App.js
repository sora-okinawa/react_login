import React from "react";

import AuthProvider from "./router/AuthContext";
import CustomRouter from "./router/CustomRouter";

const App = () => {
    return(
        <AuthProvider>
            <CustomRouter />
        </AuthProvider>
    )
}
export default App
