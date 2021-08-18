package com.gsdManagementSystemFinal.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gsdManagementSystemFinal.entities.User;
import com.gsdManagementSystemFinal.entities.UserRoles;
import com.gsdManagementSystemFinal.repo.RoleRepository;
import com.gsdManagementSystemFinal.repo.UserRepository;
import com.gsdManagementSystemFinal.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;

	
	//creating user
	@Override
	public User createUser(User user, Set<UserRoles> userRoles)throws Exception{
		
		
		User local = this.userRepository.findByEmail(user.getEmail());
		if(local!=null)
		{
			
			System.out.println("User is already there");
			throw new Exception("User is already there");
			
			
		}
			
		else
		{
			for(UserRoles ur: userRoles)
			{
				roleRepository.save(ur.getRole());
			}
			
			user.getUserRoles().addAll(userRoles);
			local = this.userRepository.save(user);
		}
		return local;
	}

	//getting user by email
	@Override
	public User getUser(String email) {
		// TODO Auto-generated method stub
		return this.userRepository.findByEmail(email);
	}

	@Override
	public void deleteUser(Long id) {
		// TODO Auto-generated method stub
		
		this.userRepository.deleteById(id);
		
	}



}
