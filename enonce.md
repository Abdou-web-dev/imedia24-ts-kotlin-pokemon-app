// create a react app that queries and displays from the Poke API, it should adhere to other requirements
// mentioned in the challenge
// Requirements:
// ● The app shall be implemented using ReactJS components and developed using
// either JavaScript or TypeScript, with the latter preferred.
// ● Please use the Poke API v2 to fetch an initial list of pokemons, use Infinite scroll to
// display more items while scrolling (CSS Grid and Flexbox for responsive layout)
// ● Upon selecting a pokemon from the list, display a modal with more information
// ● Loading state/UI
// ● Write an example of unit test using Jest and React Testing Library;
// ● Write an example of e2e test

**\*\*\*\***\*\*\***\*\*\*\***infos
Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.

React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.
Projects created with Create React App have out of the box support for React Testing Library. I

End-to-end tests simulate actual user actions and are designed to test how a real user would likely use the application. In React, E2E testing helps to ensure that the code you wrote is functional and your app works as intended, allowing you to catch bugs in your code before your app is live.

A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.
Unit Testing is defined as a type of software testing where individual components of a software are tested. Unit Testing of the software product is carried out during the development of an application. An individual component may be either an individual function or a procedure.7 jui. 2022
The purpose of unit testing is to test the correctness of isolated code
Unit testing helps isolate specific code and determine if the unit works as intended. The goal is to facilitate early detection of code flaws that may be difficult to find and fix in later testing stages. Functional testing helps verify that each application feature works as intended.30 mai 2022

Jest runs the unit tests and Selenium provides and automates the grounds for cross-browser testing.

React is one of the most popular front-end frameworks today. Just like other frameworks, it has a set of tools for debugging called React Developer Tools (React DevTools).17 mai 2022

<!-- https://jsonplaceholder.typicode.com/todos -->

I agree with your statements about Redux. The problem honestly is the way it's used.

If used to only store state that is actually global, it's fine. However, I think most of the time a lot of us like to default to throwing things into the global store to avoid prop drilling.

You can simply use context these days to avoid prop drilling. We've been replacing our application at work from Redux and moving towards using useState and useReducer, along with context. It's been fantastic.

If you're interested, you can check out my pattern for React Context

\*\*
I've been doing the same thing on all of my projects, moving to pure useReducer, useContext, and useState. I am sure there are legit cases for Redux but I think it's for a select few, really complex applications.

If you haven't tried react-query or similar library, I'd encourage you to try them out as well. It handles the data layer really cleanly and independently from context.

\*\*
Redux is not a framework or a technology. It's an architecture pattern and a damn good one at that. So much so, that facebook includes the useReducer hook in React's top level APIs.

I agree that there is a tendency in the community to use redux before it becomes necessary and to do so without understanding the benefits it provides. However, to suggest SWR and and React Query as an alternative to redux is harmful and MISLEADING. You could pair them with redux to form a pretty effective stack.

I have shipped complex production apps with and without using redux. It usually depends on the use case, app's requirements and complexity in the application's state management. I've found that in applications where redux is not a good fit, apollo client is. This is because apollo client utilizes a normalized state in to form of apollo cache. Apollo client sort of abstracts out the custom plumbing you would otherwise have to write if you were using redux and if the out of the box features in apollo client are enough for you, it may just be enough. Some of those apps still benefit from redux like patterns though, like using the useReducer hook in complex components.
