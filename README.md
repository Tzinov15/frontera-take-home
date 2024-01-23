# Frontera Take Home Assignment

### Prior to Jan 23

Prior to getting the graphql api links that were live, I was curious to get moving on the project (and antsy to setup some initial boilerplate for myself) and made the worst-case assumption that I was expected to roll my own auth solution and my own backend for the exercise. I researched various Auth0 alternatives (I have experience with Auth0 but it's pricing doesn't scale well, gets expensive) and ended up leveraging SuperTokens, an open-core solution that allows for self hosting as well. This felt like a good balance of using their hosted solution to get up and running, but having an escape hatch to get out when users increasing and pricing gets expensive.

Thus, my first pass on this project under the branch `full-stack-solution-with-auth` has this work. With the very in-depth research I wanted to do on Redux and global state management, as well as as in depth research on CSS / styling solutions and design libraries, I ended up taking about 8 hours (5 of which were research, note taking, blog reading) to complete the full stack solution.

## Following Jan 23

At this point I got the working version of the GraphQL API endpoint and discovered that it also included a full backend and auth solution, and thus branched and re-started working on the UI against the new endpoint
