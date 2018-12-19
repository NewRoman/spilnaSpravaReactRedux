
import React, {Component, Fragment} from 'react';
import LoginForm from '../components/LoginForm';

class App extends Component {
	submit = values => {
		window.alert (JSON.stringify (values));
	};
	render() {
		return (
			<div>
				<h1>Geeky Form</h1>
				<LoginForm onSubmit={this.submit} />
			</div>
		)
	}
}
export default App;