'use client'

import { useState } from "react"
import { YTDL } from "./ytdler"
import { StatusViewer } from "./statusviewer"

export function YTLDLComponent() {
    const [dlStatus, setDLStatus] = useState('Ready!')
    return (
        <>
            <div className="w-8/12"><YTDL setStatus={setDLStatus}/></div>

            <div className="text-center">
                <div><b>STATUS</b></div>
                <StatusViewer status={dlStatus} />
            </div>
        </>
    )
}