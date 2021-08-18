package com.gsdManagementSystemFinal.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gsdManagementSystemFinal.entities.Remedy;
import com.gsdManagementSystemFinal.service.RemedyService;

@RestController
@RequestMapping("/remedy")
@CrossOrigin("*")
class RemedyController {
	
	@Autowired
	private RemedyService remedyService;
	
	
	@PostMapping("/")
	public ResponseEntity<?> addCategory(@RequestBody Remedy remedy)
	{
		return ResponseEntity.ok(this.remedyService.addRemedy(remedy));
	}
	
	@GetMapping("/{rid}/update")
	public Remedy getRemedy(@PathVariable("rid") Long rid)
	{
		return this.remedyService.getRemedy(rid);
	}
	
	@GetMapping("/{empId}")
	public ResponseEntity<?> getRemedyUser(@PathVariable("empId") Long empId)
	{
		System.out.print("Inside getUserRemedy");;
		//return this.remedyService.getRemedyUser(empId);
		return ResponseEntity.ok(this.remedyService.getRemedyUser(empId));
	}
	
	@GetMapping("/")
	public ResponseEntity<?> getRemedy()
	{
		return ResponseEntity.ok(this.remedyService.getRemedy());
	}
	
	@PutMapping("/")
	public Remedy updateRemedy(@RequestBody Remedy remedy)
	{
		return this.remedyService.updateRemedy(remedy);
	}
	
	@DeleteMapping("/{rid}")
	public void deleteRemedy(@PathVariable("rid") Long rid)
	{
		this.remedyService.deleteRemedy(rid);
	}
	

}
