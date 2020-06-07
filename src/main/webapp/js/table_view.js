class UsersTable extends React.Component{
	
	render (){
		/*console.log(this.props.users)*/
		if (this.props.users == undefined){
			return(<div><Spinner animation="border" /></div>)
		}

		return (
				<div>
				<Table striped bordered hover size="sm">
				<thead>
				<tr>
				<th>#</th>
				<th>First name</th>
				<th>Second name</th>
				<th>Year of birth (1970-2069)</th>
				<th>Email</th>
				</tr>
				</thead>
				<tbody>
				{
					this.props.users.map((user, index) =>
					{
						/*console.log("user: ");
						console.log(user);*/
						return (
								<tr key={index} >
								<td>{index}</td>
								<td>
								{user.name}
								</td>
								<td>
								{user.second_name}
								</td>
								<td>
								{user.age}
								</td>
								<td>
								{user.email}
								</td>
								<td> <Button onClick = {this.props.removeUser} id_user = {user.id} variant="secondary" >Delete</Button></td>
								</tr>
						)
					}
					)
				}
				</tbody>
				</Table>
				</div>

		);
	}


}