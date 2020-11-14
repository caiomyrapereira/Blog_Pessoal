package com.generation.blog_pessoal.controller;

//labs
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//classes
import com.generation.blog_pessoal.model.Postagem;
import com.generation.blog_pessoal.repository.PostagemRepository;

@RestController
@RequestMapping("/allpostagens")
@CrossOrigin("*")
public class AllPostagemController {

	// interface
	@Autowired
	private PostagemRepository repository;

	// Método Delete
	@DeleteMapping
	public void delete() {
		repository.deleteAll();
	}

}
