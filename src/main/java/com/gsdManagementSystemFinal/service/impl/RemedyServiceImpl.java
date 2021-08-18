package com.gsdManagementSystemFinal.service.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gsdManagementSystemFinal.entities.Remedy;
import com.gsdManagementSystemFinal.repo.RemedyRepository;
import com.gsdManagementSystemFinal.service.RemedyService;


@Service
public class RemedyServiceImpl implements RemedyService {
	
	@Autowired
	private RemedyRepository remedyRepository;

	@Override
	public Remedy addRemedy(Remedy remedy) {
		// TODO Auto-generated method stub
		return this.remedyRepository.save(remedy);
	}

	@Override
	public Remedy updateRemedy(Remedy remedy) {
		// TODO Auto-generated method stub
		return this.remedyRepository.save(remedy);
	}

	@Override
	public Remedy getRemedy(Long rid) {
		// TODO Auto-generated method stub
		return this.remedyRepository.findById(rid).get();
	}

	@Override
	public void deleteRemedy(Long rid) {
		// TODO Auto-generated method stub
		this.remedyRepository.deleteById(rid);
		
	}

	@Override
	public Set<Remedy> getRemedy() {
		// TODO Auto-generated method stub
		//System.out.print(new LinkedHashSet<Remedy>(this.remedyRepository.findAll()));
		return new LinkedHashSet<Remedy>(this.remedyRepository.findAll());
	}

	@Override
	public Set<Remedy> getRemedyUser(Long empId) {
		// TODO Auto-generated method stub
		//return new LinkedHashSet<Remedy>(this.remedyRepository.findByEmpId(empId));
		
		return new LinkedHashSet<Remedy>(this.remedyRepository.findByEmpId(empId));
	}

}
