package com.gsdManagementSystemFinal.repo;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gsdManagementSystemFinal.entities.Remedy;

public interface RemedyRepository extends JpaRepository<Remedy, Long> {
	
	public Set<Remedy> findByEmpId(Long empId);

}
