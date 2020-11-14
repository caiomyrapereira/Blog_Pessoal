package com.generation.blog_pessoal.service;

import java.nio.charset.Charset;
import java.util.Optional;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.generation.blog_pessoal.model.UserLogin;
import com.generation.blog_pessoal.model.Usuario;
import com.generation.blog_pessoal.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;

	public Usuario AddUsuario(Usuario usuario) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

		String passwordEncoder = encoder.encode(usuario.getSenha());
		usuario.setSenha(passwordEncoder);

		return usuarioRepository.save(usuario);
	}
	
	public Optional<UserLogin> Logar(Optional<UserLogin> user) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		Optional<Usuario> usuario = usuarioRepository.findByEmail(user.get().getEmail());
		boolean status = usuario.isPresent() &&  encoder.matches(user.get().getSenha(),usuario.get().getSenha());
		
		if(status) {
			String auth = user.get().getEmail() +':'+ user.get().getSenha();
			byte[] encodeAuth = Base64.encodeBase64(auth.getBytes( Charset.forName("US-ASCII") ));
			String authHeader = "Basic"+ new String(encodeAuth); 
			
			user.get().setToken(authHeader);
			user.get().setNome(usuario.get().getNome());
			return user;
		}
		return null;
	}
}
