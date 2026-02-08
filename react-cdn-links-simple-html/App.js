// const h1 = document.createElement('h1');
// h1.innerHTML = 'Hello World from javascript';
// document.getElementById('root').appendChild(h1);


const parent = React.createElement('div', {id: 'parent'}, [
    React.createElement('div', {id: 'child1'}, 
        [
            React.createElement('h1', {id: 'heading'}, 'Hello World from React'),
            React.createElement('h2', {}, 'child 1 part 2'),
        ]
    ),
    React.createElement('div', {id: 'child2'}, 
        [
            React.createElement('h1', {}, 'Hello World from Child2'),
            React.createElement('h2', {}, 'child 2 part 2'),
        ]
    ),
] );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);