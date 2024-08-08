'use server'

import { exec } from "child_process"

export async function actuallyDLYT(url: string) {
    try {
        // Run the DL
        await dotheFFMPEG(url)

    } catch(e) {
        // Throw an error if something happened
        throw Error('Something went wrong!')
    }
}

async function dotheFFMPEG(url: string) {
    exec(`yt-dlp --extract-audio --audio-format mp3 --paths ${process.env.DL_FOLDER} ${url}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`)
            throw Error('Error running command!')
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`)
            throw Error('Error running command!')
        }

        console.log(`stdout: ${stdout}`)
    })
}