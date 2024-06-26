"use client"

import { Session, User } from "lucia"
import { createContext, useContext } from "react"

interface SessionProviderProps {
  user: User | null
  session: Session | null
}

const SessionContext = createContext<SessionProviderProps>(
  {} as SessionProviderProps,
)

export const useSession = () => {
  const sessionContext = useContext(SessionContext)
  if (!sessionContext) {
    throw new Error("useSession must be used within a SessionProvider")
  }

  return sessionContext
}

export const SessionProvider = ({
  children,
  sessionData,
}: {
  children: React.ReactNode
  sessionData: SessionProviderProps
}) => {
  return (
    <SessionContext.Provider value={sessionData}>
      {children}
    </SessionContext.Provider>
  )
}
