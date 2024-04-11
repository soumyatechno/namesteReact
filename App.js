import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
const heading = React.createElement('h1', { id: 'heading' }, 'Hello world!');
// jsx
const header = <h1 className="header">Hello there!</h1>;
// React Component
const HeaderComponent = () => (
	<div>
		{header}
		<h1>This is a Header component.</h1>
	</div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(header, 'h1', heading, 'h3');
root.render(<HeaderComponent />);
