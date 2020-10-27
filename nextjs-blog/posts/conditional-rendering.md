---
title: "Conditional Rendering w/ React"
date: "2020-10-04"
tag: "React.js"
---

#### Conditional Rendering

In react you can create distinct components that encapsulate behaviors that you may need. Then, when when you see fit, you are allowed to render them based off **conditions** (state of application).

If you already know conditionals in Javascript, you will have no problem understanding conditionals in React! They work in a very similar way.

Consider having two functions:

```
function DarkMode(props) {
    return <h1>dark mode!</h1>
}

function LightMode(props) {
    return <h1>light mode!</h1>
}
```

We can create a `Mode` component that displays either darkmode or lightmode depending on whether the user's device is dark or light (or preference)

```
function Mode(props {
    const whichMode = props.whichMode;
    if (whichMode == 'dark'){
        return <DarkMode/>;
    }
    return <LightMode/>;
});

ReactDOM.render(
    <Mode whichMode={dark}/>
    document.getElementById('root')
);
```

Keep in mind this is all psuedo code and will probably not work right out the bat, but rather a **(VERY BASIC)** representation and example explaining conditional rendering of different components.

####Element Variables
You can use variables to store elements. This will help you conditionally render a part of a component while the rest changing.

You can use state to help conditionally render a component. This can allow for your webpage to be dynamically rendered without changing everything on the page/component.

##### Inline If with Logical && Operator

Here you can use JSX expressions inside of your JSX to create conditionals.

Example:

```
<div>
    <h1>Hello!</h1>
    {unreadMessages.length > 0 &&
        <h2>
            You have {unreadMessages.length} unread messages.
        </h2>
    }
</div>
```

This will only include the `<h2>` if you have unread messages! Super useful for conditionally including an element inside your component.

##### Inline If/Else

Continuing with Inline conditons, you can use `condition ? true : false` in react components.

This can allow you to do crazy things with conditonal rendering and components all over your webpages.

These are all the different styles of incorporating conditional rendering and its up to you to decide the best way to approach things.

I personally use **Inline Conditional Rendering** just because it allows me to keep things in one component instead of separating them. But the downside is sometimes components can get fairly complicated, and when they do, I consider splitting them up.
