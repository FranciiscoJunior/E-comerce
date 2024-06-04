import { ReactNode } from "react"

type props = {
    children: ReactNode;
}

export function container ({children}: props) {
    return <div className="px-2 md:px-5 py-4 max-w-7xl mx-auto w-full">{children}</div>
}