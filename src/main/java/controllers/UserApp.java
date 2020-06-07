package controllers;

import java.io.IOException;
import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import service.UsersJavaBean;

@WebServlet("")
public class UserApp extends HttpServlet {

	@EJB
	UsersJavaBean javaBean;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
		resp.setContentType("text/html;charset=utf-8");
		req.setCharacterEncoding("utf-8");
		req.getRequestDispatcher("/WEB-INF/index.jsp").forward(req, resp);
	}

}
