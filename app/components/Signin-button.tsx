"use client"

import { sign } from "crypto"
import { signOut, useSession, signIn } from "next-auth/react"

const SignIn = () => {
    const { data: session } = useSession()
    if (!session) {
        return (
            <>
                <button onClick={() => signIn()}>Sign In</button>
            </>
        )
    }
    return (
        <div>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    )
}

export default SignIn