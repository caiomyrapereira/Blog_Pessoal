package com.generation.blog_pessoal.controller;

//labs
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

//classes
import com.generation.blog_pessoal.model.Postagem;
import com.generation.blog_pessoal.repository.PostagemRepository;

@RestController
@RequestMapping("/postagens")
@CrossOrigin("*")
public class PostagemController {

	// interface
	@Autowired
	private PostagemRepository repository;

	// FindAll
	@GetMapping
	public ResponseEntity<List<Postagem>> GetAllPostagens() {
		return ResponseEntity.ok(repository.findAll());
	}

	// FindById
	@GetMapping("/{id}")
	public ResponseEntity<Postagem> GetByIdPostagem(@PathVariable long id) {
		return repository.findById(id).map(response -> ResponseEntity.ok(response))
				.orElse(ResponseEntity.notFound().build());
	}

	// titleAll
	@GetMapping("/titulos/{titulo}")
	public ResponseEntity<List<Postagem>> GetByTitulosPostagens(@PathVariable String titulo) {
		return ResponseEntity.ok(repository.findAllByTituloContainingIgnoreCase(titulo));
	}

	// titleOne
	@GetMapping("/titulo/{titulo}")
	public ResponseEntity<List<Postagem>> GetByTituloPostagem(@PathVariable String titulo) {
		if (repository.findAllByTituloContainingIgnoreCase(titulo).size() == 1)
			return ResponseEntity.ok(repository.findAllByTituloContainingIgnoreCase(titulo));
		else
			return ResponseEntity.notFound().build();
	}

	// Método posto
	@PostMapping
	public ResponseEntity<Postagem> post(@RequestBody Postagem postagem) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(postagem));
	}

	// Método Put
	@PutMapping
	public ResponseEntity<Postagem> put(@RequestBody Postagem postagem) {
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(postagem));
	}

	// Método Delete
	@DeleteMapping("/{id}")
	public void delete(@PathVariable long id) {
		repository.deleteById(id);
	}

}
