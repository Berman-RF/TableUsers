class AddUser extends React.Component{
	constructor(props){
		super(props);
		this.state = {
				firstName: '', lastName: '', age: '', email: '',
		};
		this.setFirstName = this.setFirstName.bind(this);
		this.setSecondName = this.setSecondName.bind(this);
		this.setAge = this.setAge.bind(this);
		this.setEmail = this.setEmail.bind(this);
		
	}
	
	setFirstName = (event) => {
		this.setState({firstName: event.target.value});
	}
	setSecondName = (event) => {
		this.setState({lastName: event.target.value});
	}
	setAge = (event) => {
		this.setState({age: event.target.value});
	}
	setEmail = (event) => {
		this.setState({email: event.target.value});
	}

	createUser = (event) => {
		var user = new Object();
		user.name = this.state.firstName;
		user.second_name = this.state.lastName;
		user.age = this.state.age;
		user.email = this.state.email;
		this.props.addUser(user);
		this.setState({firstName: ''});
		this.setState({lastName: ''});
		this.setState({age: ''});
		this.setState({email: ''});
	}
	
	render (){
		return (
				<div className="container mt-3">
				  <h3>User Add</h3>
				  
				  <form>
				    <div className="input-group mb-3">
				      <div className="input-group-prepend">
				        <Button onClick = {this.createUser} variant="secondary">Add</Button>
				      </div>
				      <input type="text" value={this.state.firstName} onChange={this.setFirstName} className="form-control" placeholder="First Name"  />
				      <input type="text" value={this.state.lastName} onChange={this.setSecondName} className="form-control" placeholder="Last Name" />
				      <input type="text" value={this.state.age} onChange={this.setAge} className="form-control" placeholder="Year of birth" />	
				      <input type="text" value={this.state.email} onChange={this.setEmail} className="form-control" placeholder="Email" /> 
				    </div>  
				  </form>
				 </div>
				
			  );
	}
	
	
}