package com.generation.blog_pessoal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.generation.blog_pessoal.model.Tema;

public interface TemaRepository extends JpaRepository<Tema, Long> {

	List<Tema> findAllByDescricaoContainingIgnoreCase(String descricao);

}
