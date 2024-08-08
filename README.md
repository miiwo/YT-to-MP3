# Youtube to MP3 Web App
For self use with family and friends.

This app will DL the files to a shared network location.


## Getting Started
This app is compatible with Linux, and/or run via Docker on any OS.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run on Docker
Run the following commands in your terminal:

```bash
docker build -t yt2mp3

docker run -d -p 3000:3000 -v <path/on/your/machine/here>:/opt/dls --name yt2mp3 yt2mp3
```