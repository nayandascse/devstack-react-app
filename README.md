Project Name: Technology Course App

Description: In this project the parent component passes technology data to child components using props. For example technology information is passed to the technology card component. When the child need to perform an action, such as adding or removing a technology, it can call a callback function passed from the parent.

- Technology that I use : HTML, Tailwind CSS, JavaScript, React.JS, React-Toastify, JSON, Vite

- 3 Features:
- 1: Here have different types of technology course
- 2: A Person buy multiple course in a on time.
- 3: He change his chosse item and if any problem face contact with us any time.

1. What is JSX, and why is it used in React?
Ans: JSX means JavaScript XML it is allowed to devoloperused to write HTML directly inside a javaScript file. 
It is used for easy to read, combines UI and Logic, Dynamic Content.

2. What is the difference between props and state?
Ans: Props: Data passed from parent to child, child cannot change, controlled by parent.
State: Data managed inside a component, can be change own state using update functions use State of setState

3. What does the `useState` hook do, and where did you use it in this project?
Ans: useState is React Hook that allows a functional component to store and update data when state change its rerender the component. I use in this project for technology load 

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
Ans: useEffect is react hook used to perform side effects in a component such as API or JSON file, updating the document, running code when component loads or specific data change. In this project the technology information was store in JSON file. We need the load data when the component first load.

5. Why does every item in a `.map()` list need a unique `key` prop?
Ans: React needs a unique key for each item in a list it can identify which items changed, added, or removed when UI update.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Ans: Conditional rendering means displaying different UI elements depending on a condition. Example:  if (!response.ok) throw new Error("Failed to load technologies");

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans: A parent passes data to a child component props. It child need to send data back to the parent, parent passes a callback function as a prop and child call that function required data.
