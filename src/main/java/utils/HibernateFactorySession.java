package utils;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import models.User;

public class HibernateFactorySession {
	private static SessionFactory sessionFactory;

	public HibernateFactorySession() {
	}

	public static SessionFactory getSessionFactory() {
		if (sessionFactory == null) {
			Configuration configuration = new Configuration().configure();
			configuration.addAnnotatedClass(User.class);
			StandardServiceRegistryBuilder builder = new StandardServiceRegistryBuilder()
					.applySettings(configuration.getProperties());
			sessionFactory = configuration.buildSessionFactory(builder.build());
		}
		return sessionFactory;
	}

}
