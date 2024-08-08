'use client'
import { actuallyDLYT } from "./actions"

const regex = new RegExp("^(http(s)??\:\/\/)?(www\.)?((youtube\.com\/watch\?v=)|(youtu.be\/))([a-zA-Z0-9\-_])+")

export function YTDL({setStatus} : {setStatus: (status:string) => void}) {

    const dlYT = async (formData:any) => {
        const url:string = formData.get('yt-url')

        // Sanitize
        /*if (!regex.test(url)) {
            alert("Please put a Youtube URL")
            return
        }*/
        
        // Grab file
        setStatus('Downloading...')
        await actuallyDLYT(url)
            .then(() => setStatus('Success!'))
            .catch(() => setStatus('Error!'))
    }
    

    return (
        <form action={dlYT} className="flex">
            <input type='text' name="yt-url" placeholder={"Input YT URL"} className="rounded-xl grow ps-4 text-xl" />
            <button type="submit" className="bg-green-500 ms-3 px-5 py-3 rounded text-white">DL</button>
        </form>
    )
  }