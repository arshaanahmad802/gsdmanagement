package com.gsdManagementSystemFinal.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.gsdManagementSystemFinal.entities.User;
import com.gsdManagementSystemFinal.repo.UserRepository;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
	private UserRepository userRepository;
	String email;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		User user = this.userRepository.findByEmail(username);
		if(user==null)
		{
			System.out.println("User not found");
			throw new UsernameNotFoundException("Invalid Credential");
		}
		return user;
	}
	
	
	
	

}
