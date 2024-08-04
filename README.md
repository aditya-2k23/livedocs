# LiveDocs

![LiveDocs](public/assets/images/logo.png) **LiveDocs** is a collaborative documentation editor that enables you to write your documentation in markdown and automatically syncs it with other collaborators who have permissions to view or edit the project alongside you. It provides a seamless and efficient way to work together on documentation, ensuring that everyone stays up-to-date with the latest changes.

<!-- See the project live at [livedocs.vercel.app](https://livedocs.vercel.app) -->

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [About Next.js](#about-nextjs)

## Features

- Real-time collaboration
- Markdown editor
- Commenting on documents, paragraphs, and lines
- Notifications for mentions and invites
- User roles and permissions
- Seamless integration with other collaborators on the same document

## Screenshots

### Home Page

![Home Page](/public/assets/images/Home.png)

### Document Editor Page

![Document Editor Page](/public/assets/images/Document%20Editor.png)

### Invite Collaborators Modal

![Invite Collaborators](/public/assets/images/Invite%20collaborators.png)

### Commenting on a Document

![Commenting on a Document](/public/assets/images/Comments.png)

## Tech Stack

- [Next.js](https://nextjs.org/) with [React](https://reactjs.org/) for the frontend
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Liveblocks.io](https://liveblocks.io/) for real-time collaboration
- [Clerk.dev](https://clerk.dev/) for authentication
- [JSM Editor](https://www.npmjs.com/package/jsm-editor?activeTab=readme) using [lexical](https://lexical.dev/) for markdown editing
- [Vercel](https://vercel.com/) for deployment

## Getting Started

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

### About Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)
