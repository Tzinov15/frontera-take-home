# Frontera Take Home Assignment

### Prior to Jan 23

Prior to getting the graphql api links that were live, I was curious to get moving on the project (and antsy to setup some initial boilerplate for myself) and made the worst-case assumption that I was expected to roll my own auth solution and my own backend for the exercise. I researched various Auth0 alternatives (I have experience with Auth0 but it's pricing doesn't scale well, gets expensive) and ended up leveraging SuperTokens, an open-core solution that allows for self hosting as well. This felt like a good balance of using their hosted solution to get up and running, but having an escape hatch to get out when users increasing and pricing gets expensive.

Thus, my first pass on this project under the branch `full-stack-solution-with-auth` has this work.

## Following Jan 23

At this point I got the working version of the GraphQL API endpoint and discovered that it also included a full backend and auth solution, and thus branched and re-started working on the UI against the new endpoint

## How To Run

```bash
git clone git@github.com:Tzinov15/frontera-take-home.git
cd frontera-take-home/fe
yarn install # install all project dependencies
yarn start # run web server serving SPA, generate types

# navigate to localhost:3000
```

## The Approach and The Decisions Made

When I started this assignment, I had the goal of approaching it not just as a take-home assignment but as a project that would necessitate the kind of planning and forethought that starting a production scale, web app from scratch would. I wanted to show the kind of research, weighing of options, and diving into industry best practices I would do when on the actual job as well. I thus looked at a few key areas of building a web app and dove into several hours of research and prototyping to see what industry best practices are today. I have broken down these areas below, but they are:

- **`Global State Mangement Tools`**
- **`Design Systems / Component Libraries / CSS Solutions`**

### Global State Management Tools

When I saw the mention of Redux and Redux Saga, the first thoughts that popped into my head were flashbacks of extensive boiler plate, lots of middleware, several layers of abstraction that introduced a lot of moving pieces, and a lot of overheard to extend and add functionality. I was very curious to dive into the world of state management and understand where industry standards had come today and what other (if any) approaches existed. Again, I approached this assignment through the lens of "If we were to start building a production-ready web app with the best practices of today, what should be included and how can I make the case for that?"

Amidst my research and experience I have come to understand **UI application state** as falling into 3 buckets:

- `Local State` - this is state localized to a specific UI component and doesn't exist outside (ie: a form input, toggle state, animated mouseover state, etc). This is often as simply
- `Global Client Only State` - this is state that is necessary to have globally accessible to several components at various depths of the component tree (ie: global theming settings, open/close modal that needs to be opened from several places, scroll position that is getting persisted across tabs, which tab the user might be on, etc). This kind of state benefits from being managed centrally and not needing to be prop drilled, a problem that both Redux and other solutions _can_ solve (eg: using React Context + useReducer)
- `Server / Database State` - this is state that exists on the UI and is effectively a cache for the database / backend. This is where the business logic of the app usually resides. The end user can _view_ their persisted saved state (view their appointments, view their historical progress, view their posts, etc) and _modify_ their persisted save state (register a new account, book a new appointment, etc).

  This kind of state is unique from client-only state in several in its aspects, including the repeated `idle` | `fetching` | `success` | `error` states that each request for data can be in, the problems of invalidating caches and knowing when to re-request data, and insuring that the state between the backend and the state on the UI is kept in sync (when you make a POST request that will take a long time do you optimistically update the UI? Do you refetch data every time the user mounts a component or only when the app mounts? Do you store fetched data in localStorage?)

  All of these unique aspects to managing Server / Database / (Business Logic) State and separating this kind of state from client-only state moved me towards a library uniquely designed to solve it. [React Query (now known as TanStack Query)](https://tanstack.com/query/v4/docs/react/overview). It is one of the faster growing React libraries and I immediately found that it abstracted all of the difficult aspects mentioned above. Since this assignment predominately deals with Server state (User Login, User Signup, User Details) I decided that adopting TanStack Query would be a much faster, much more elegant, and much cleaner solution to managing async server state than setting up an entire Redux + Redux Saga solution

### Design Systems / Component Libraries / CSS Solutions

I decided to adopt a CSS framework that I haven't largely used before but have heard positive things about, in particular with regards to aiding fast prototyping. [TailwindCSS](https://tailwindcss.com/) is an AtomicCSS library where styling happens through utility classes, much like Bootstrap back in the day (ie: `mx-4`, `text-align-center`, `bg-color-green-500`, `width-full`, etc).

While my desired longer term solution would be a dedicated component library, TailwindCSS allowed me to very quickly build up interfaces that got the job done. I also pulled in the ANT Components from their design system, although used them sparingly since I found myself faster at prototyping components on the fly with Tailwind than understanding the various configurations of ANT. As a UI developer that thrives on having intimate control over styling / layout and also with limited time on the project, I found myself most productive using Tailwind
