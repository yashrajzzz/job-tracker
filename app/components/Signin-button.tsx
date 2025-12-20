"use client"

import { signOut, useSession, signIn } from "next-auth/react"

export default function SignIn() {
    const { data: session } = useSession()

    if (!session) {
        return (
            <>
                <div>Not authenticated</div>
                <button onClick={() => signIn()}>Sign In</button>
            </>
        )
    }


    return (
        <div>
            <p>Signed in as {session.user?.email}</p>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    )
}
