# React-Redux-App-Tutorial

reference: https://www.youtube.com/playlist?list=PLUVqY59GNZQNTlOnGne0G7DXnmi7CeOtc

 React
        - NPM - package manager used to install,delete and update JS packages on computer.
        - NPX - package executer used to execute JS packages directly without installing them.
        - DOM - DOCUMENT OBJECT MODEL
            D - DOCUMENT -> HTML FILE
            O - OBJECT -> TAGS like title,body,url
            M - MODEL -> Collections and arrangement of html tags
        - Virtual DOM
        - how to create react app : npx create-react-app [reactappname]
        - how to start react app : npm start
        - props -> immutable
        - props type (props validation)
        - Fragments <></>
        - state -> mutable
        - setState - used to change the value 
        - Event Handling -> clickMe--  <button onClick={increment}>+</button> -- like function/methods
        - if you use arrow function then no need to bind that function inside constructor.
        - Rendering an Array of Data with map()
        - Class Component (constructor,event binding)
        - JSX - JAVASCRIPT XML
        - Life Cycle - mounting,updating & unmounting
        - Pure Component (works only in class component, use React.memo in functional component)
        - Functional Component (Hooks) -useState,UseEffect
        - Axios (API Calling --> Post,Get,Delete,Update)
        - Routing (authentication)
        
        
         Redux
       - State Management JS Library
       - It can be used with React, Angular, Vue etc.

       - Redux (store state of your application) --- act as Book shop (store books)
           | (update state track records) eg: removes book
           |
         Reducer --- acts as Shopkeeper
           | (action) eg: buy book
           |
         Component --- acts as Customer (buy book)

       - 3 principle of redux:
            1. Action
            2. Reducer
            3. Store

       - Redux Thunk --> middleware
