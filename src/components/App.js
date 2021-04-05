import React from 'react';

class App extends React.Component{
	state = {language: 'english'};
	onLanguageChange = language =>{
		this.setState({ language });
	}

	render(){
		return (
			<div className="ui container">
				<div>
					<h2>Select a language:</h2>
					<i className="flag us" onClick={() => this.onLanguageChange('english')}></i>
					<i className="flag myanmar" onClick={() =>this.onLanguageChange('myanmar')}></i>
				</div>
				{this.state.language}
			</div>
		)
	}
}

export default App;