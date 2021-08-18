package com.gsdManagementSystemFinal.service;

import java.util.Set;

import com.gsdManagementSystemFinal.entities.Remedy;

public interface RemedyService {
	
	public Remedy addRemedy(Remedy remedy);
	public Remedy updateRemedy(Remedy remedy);
	public Remedy getRemedy(Long rid);
	public Set<Remedy> getRemedyUser(Long empId);
	public void deleteRemedy(Long rid);
	public Set<Remedy> getRemedy();

}
