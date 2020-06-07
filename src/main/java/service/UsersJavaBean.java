package service;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import models.User;

@Stateless
public class UsersJavaBean {

	@PersistenceContext(unitName = "myUnit")
	EntityManager entityManager;

	public void saveUser(User user) {
		entityManager.persist(user);
	}

	public User getUser(int id) {
		return entityManager.find(User.class, id);
	}

	public void deleteUser(User user) {
		entityManager.remove(entityManager.contains(user) ? user : entityManager.merge(user));
	}

	public List<User> getAll() {
		CriteriaBuilder cb = entityManager.getCriteriaBuilder();
		CriteriaQuery<User> cq = cb.createQuery(User.class);
		Root<User> rootEntry = cq.from(User.class);
		CriteriaQuery<User> all = cq.select(rootEntry);
		TypedQuery<User> allQuery = entityManager.createQuery(all);
		return allQuery.getResultList();
	}

}
