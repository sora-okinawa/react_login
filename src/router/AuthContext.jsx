// ① createContext()を使い値の格納場所を作成します。(値を下の階層に受け渡すための容器)
// ② ①を扱いやすいようにする関数
// ③ ブラウザのlocalStrageに保存する関数
// ④ ブラウザのlocalStrageから値を取得する関数
// ⑤ ログイン状態を管理するための認証基盤
// ⑥ ①のAuthContextにvalueとして値を格納

import React, { createContext, useState, useContext } from 'react'

// ①
const AuthContext = createContext();
// ②
export const useAuthContext = () => {
  return useContext(AuthContext)
}
// ③
export const setSession = (AuthInfo) => {
  localStorage.setItem('AuthInfo', JSON.stringify(AuthInfo))
}
// ④
export const getSession = () => {
  const userInfo = localStorage.getItem('AuthInfo')
  if (userInfo) {
    return JSON.parse(userInfo)
  } else {
    return {}
  }
}
// ⑤
const AuthProvider = ({ children }) => {
  const [LoggedIn, setLoggedIn] = useState(false)
  const [AuthInfo, setAuthInfo] = useState({})
  const [Loading, setLoading] = useState(false)

  return (
    // ⑥
    <AuthContext.Provider value={{
      LoggedIn,
      setLoggedIn,
      AuthInfo,
      setAuthInfo,
      Loading,
      setLoading
    }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
