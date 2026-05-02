import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', {id: 'parent'}, [
    React.createElement('div', {id: 'child1', key: 'child1'}, 
        [
            React.createElement('h1', {id: 'heading', key: 'heading1'}, 'Hello World from React'),
            React.createElement('h2', {key: 'h2-1'}, 'child 1 part 2'),
        ]
    ),
    React.createElement('div', {id: 'child2', key: 'child2'}, 
        [
            React.createElement('h1', {key: 'heading2'}, 'This is learning React'),
            React.createElement('h2', {key: 'h2-2'}, 'child 2 part 2'),
        ]
    ),
] );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);