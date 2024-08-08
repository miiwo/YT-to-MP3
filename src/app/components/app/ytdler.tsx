'use client'
import { actuallyDLYT } from "./actions"

const ytregex = new RegExp("https://www.youtube.com/watch\\?v=[a-zA-Z0-9]{1,11}")

export function YTDL({setStatus} : {setStatus: (status:string) => void}) {

    const dlYT = async (formData:any) => {
        const url:string = formData.get('yt-url')

        // Sanitize
        if (!ytregex.test(url)) {
            alert("Please put a proper Youtube URL")
            return
        }
        
        // Grab file
        setStatus('Downloading...')
        await actuallyDLYT(url, setStatus).catch(() => setStatus('Error!'))
    }
    

    return (
        <form action={dlYT} className="flex">
            <input type='text' name="yt-url" placeholder={"Input YT URL"} className="rounded-xl grow ps-4 text-xl" />
            <button type="submit" className="bg-green-500 ms-3 px-5 py-3 rounded text-white">DL</button>
        </form>
    )
  }