package com.generation.blog_pessoal.controller;

//labs
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//classes
import com.generation.blog_pessoal.model.Postagem;
import com.generation.blog_pessoal.repository.PostagemRepository;

@RestController
@RequestMapping("/postagens")
@CrossOrigin("*")
public class PostagemController {

	@Autowired
	private PostagemRepository repository;

	// FindAll
	@GetMapping
	public ResponseEntity<List<Postagem>> GetAllPostagens() {
		return ResponseEntity.ok(repository.findAll());
	}
	
	
	//FindById
	@GetMapping("/{id}")
	public ResponseEntity<Postagem> GetByIdPostagem(@PathVariable  long id){
		return repository.findById(id)
				.map(response -> ResponseEntity.ok(response) )
				.orElse(ResponseEntity.notFound().build());
	}

}
