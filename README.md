# Hey 👋🏼 Welcome to My Site
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/{route_name}](http://localhost:3000/api/*). This endpoint can be edited in `pages/api/*.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

----

## Tech Stack (JAM Stack)
- [Nextjs](https://nextjs.org/docs/getting-started) (SSR/SSG)
- [React](https://reactjs.org/docs/getting-started.html) (UI)
- [TailwindCSS](https://tailwindcss.com/docs) (custom styling)
- Sanity.io (CMS)
- [Netlify](https://www.netlify.com/jamstack/)(Build System - CI/CD)

## Key Concepts Used 

- `prop-types` : I wanted to enhance the developer experience by importing prop-types and ensuring props take in the correct type

----

## Styling - TailwindCSS
### Approach
- Mobile-first responsive design
- Easy-to-customize library w/out heavy setup.
- I was considering `MaterialUI` , but decided it was too much for the scope of this project.

*This is my first time using `TailwindCSS`, so I relied heavily on [best practices on theme configuration](https://tailwindcss.com/docs/theme)*

----
## Goals
### User
*...Should be able to:*
- View and Download my `resume`
- View `/Projects`
    - filter by technology
    -  View `/Project` details:
        - Project Name
        - Client (if needed)
        - Overview
        - My role 
        - Tech stack
        - Goals
        - Requirements 
        - Outcomes/Analytics (if any) 
        - Link to live app/site
        - Link to repo
- Fill out `contact` that sends me an email
- Easily navigate between pages on both desktop and mobile
- See `/testimonials`
- Identify `how I work` and with a team

### My Goals
- Show my best work
- Allow user to view/download CV
- Contact me with brief reason (email)
- Create a fun/interactive user experience when navigating the site
----

## Future enhancements/Ideas
- Emulate a song player at bottom of project page
    - title =  project name
    - artist = me
    - player timeline = page progress bar 
    - prev btn = prev project
    - next btn = next project

`* Future enhancement to add data and app functionality`

