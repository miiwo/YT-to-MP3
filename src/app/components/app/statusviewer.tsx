'use client'

export function StatusViewer({status} : {status: string}) {
    
    return (
        <>
            {status === "Error!" ? "There was an error downloading your file" : status}
        </>
    )
}