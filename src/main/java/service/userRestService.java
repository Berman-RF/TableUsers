package service;

import java.util.List;
import javax.ejb.EJB;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import com.google.gson.Gson;
import models.User;

@Consumes(MediaType.APPLICATION_JSON)
@Path("/users")
public class userRestService {

	@EJB
	private UsersJavaBean usersJavaBean;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getUserList() {
		List<User> list = usersJavaBean.getAll();
		return Response.status(200).entity(new Gson().toJson(list)).build();
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/post")
	public Response addUser(User user) {
		usersJavaBean.saveUser(user);
		List<User> list = usersJavaBean.getAll();
		return Response.status(200).entity(new Gson().toJson(list)).build();
	}

	@DELETE
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/delete/{id}")
	public Response removeUser(@PathParam("id") int id) {
		User user = usersJavaBean.getUser(id);
		usersJavaBean.deleteUser(user);
		List<User> list = usersJavaBean.getAll();
		return Response.status(200).entity(new Gson().toJson(list)).build();
	}
}
