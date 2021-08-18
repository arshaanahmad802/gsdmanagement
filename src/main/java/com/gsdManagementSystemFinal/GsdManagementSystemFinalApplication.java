package com.gsdManagementSystemFinal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;


@SpringBootApplication
@EnableConfigurationProperties
@EntityScan(basePackages = {"com.gsdManagementSystemFinal.entities"})
public class GsdManagementSystemFinalApplication {

	public static void main(String[] args) {
		SpringApplication.run(GsdManagementSystemFinalApplication.class, args);
	}

}
