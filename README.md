# [Twitter Profile Viewer](https://profileviewer.vercel.app)

## ⚠️ About the migration to the new domain
I created this tool to apply for [Cloudflare's Developer Summer Challenge](https://blog.cloudflare.com/developer-summer-challenge/). I really enjoyed coding it, dealing with the Twitter API etc. It was really fun. However I don't want to renew its domain because I believe it's not necessary. So I decided to connect it to Vercel and use vercel.app subdomain. You can use the domain **profileviewer.site** until September 20. After that, I won't be owning the domain so you won't be able to access it through that domain.

![Screenshot of the app](https://i.imgur.com/xMGM29o.png)

A service to see your Twitter profile from a new perspective with more details, using all of the data you can get from the [Twitter API](https://developer.twitter.com).

## 🔥 Features

- See how many public lists you are a member of.
- See how many tweets you liked.
- See your **Twitter User ID**.
- See your account's **exact** creation date with **hours and minutes**. (Example: 22/01/2018 07:21:29)

## 🌟 Self-hosting

- Clone this repo: `git clone https://github.com/ardasoyturk/twitter-profile-viewer`
  - Change directory to the new folder: `cd twitter-profile-viewer`
- Instal dependencies
  - With `npm`: `npm install`
  - With `yarn`: `yarn`
  - With `pnpm`: `pnpm install`
- Start in development, or build the app
  - With `npm`: `npm run dev` or `npm run build` (and then `npm run serve`)
  - With `yarn`: `yarn dev` or `yarn build` (and then `yarn serve`)
  - With `pnpm`: `pnpm run dev` or `pnpm run build` (and then `pnpm run serve`)

## 🙏 Thanks

- Tools and Libraries;
  - [Twitter API](https://developer.twitter.com)
  - [Vue 3](https://v3.vuejs.org)
  - [Vite](https://vitejs.dev)
  - [Windi CSS](https://windicss.org)
  - [VueUse](https://vueuse.org)
- People and their projects;
  - [EGGSY's Lanyard Visualizer](https://lanyard-visualizer.netlify.app): It inspired me to create a tool like this and I'm really happy for that.
