package com.gsdManagementSystemFinal.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gsdManagementSystemFinal.entities.User;

public interface UserRepository extends JpaRepository<User,Long> {
	
	public User findByEmail(String Email);

}
