

class TableContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
				users:[],
		};
	}

	render (){
		/*console.log(this.state.users);*/
		return (
				<div>
				<UsersTable users={this.state.users} removeUser = {this.removeUser}/>
				<AddUser addUser = {this.addUser}/>
				</div>
		);
	}
	
	componentDidMount(){
		$.ajax({
			url:'rest/users',
			dataType: 'json',
			success: function(data) {
				/*console.log(data);*/
				this.setState({users:data});				
			}.bind(this),
			error: function(xhr, status, err){
				console.error(status, err.toString());
			}
			
		});
			
	}
	
	removeUser = (user) => {
		var id_user = user.target.attributes.id_user.value;
		/*console.log(id_user);*/
		$.ajax({
			url:'rest/users/delete/' + id_user,
			type: 'DELETE',
			dataType: 'json',
			success: function(data) {
				/*console.log(data);*/
				this.setState({users:data});				
			}.bind(this),
			error: function(xhr, status, err){
				console.error(status, err.toString());
			}
		});
	}
	
addUser = (user) => {
		
		console.log(user);
		let json = JSON.stringify(user);
		console.log(json);
		$.ajax({
			url:'rest/users/post',
			type: 'POST',
			data: json ,
		    contentType:"application/json; charset=utf-8",
			dataType: 'json',
			success: function(user) {
				console.log(user);
				this.setState({users:user});				
			}.bind(this),
			error: function(xhr, status, err){
				console.error(status, err.toString());
				console.log(JSON.stringify(user));
			
			}
		});
	}

}
