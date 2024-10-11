import { createContext, ReactNode, useState } from "react";

type UserData = {
    token?: string,
    name: string,
    email: string,
}

type AuthContext = {
    userData?: UserData,
    signIn: (email: string, password: string) => void,
    signOut: () => void
}


export const AuthContext = createContext<AuthContext>({} as AuthContext)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [userData, setUserData] = useState<UserData>();

    const signIn = (email: string, password: string) => {
        setTimeout(() => {
            if (password === "123456") {
                setUserData({
                    email: email,
                    name: "Vands"
                })
            } else {
                setUserData(undefined);
            }
        }, 800);
    }

    const signOut = () => {
        setUserData(undefined)
    }

    return (

        <AuthContext.Provider value={{ userData, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )

}