package com.gsdManagementSystemFinal.service;

import java.util.Set;

import com.gsdManagementSystemFinal.entities.User;
import com.gsdManagementSystemFinal.entities.UserRoles;

public interface UserService {

	
	
	//creating user
	public User createUser(User user, Set<UserRoles> userRoles)throws Exception;
	
	//get user by email
	public User getUser(String email);
	
	//delete user by id
	public void deleteUser(Long id);
}
