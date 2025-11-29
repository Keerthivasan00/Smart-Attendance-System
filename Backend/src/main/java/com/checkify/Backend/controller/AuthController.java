package com.checkify.Backend.controller;

import com.checkify.Backend.model.Users;
import com.checkify.Backend.repository.MyUserDetailRepo;
import com.checkify.Backend.service.JwtService;
import com.checkify.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    UserService service;

    @Autowired
    JwtService jwtService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    MyUserDetailRepo repo;

//    @PostMapping("/login")
//    public String login(@RequestBody Users user){
//        Authentication authentication=authenticationManager
//                .authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(),user.getPassword()));
//        if(authentication.isAuthenticated()){
//            return jwtService.generateToken(user.getEmail());
//        }
//        else{
//            return "Login Failed";
//        }
//    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Users loginRequest) {
        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
            );
            Users user = service.findByEmail(loginRequest.getEmail());
            String role = user.getRole();
            String token = jwtService.generateToken(user.getEmail());
            return ResponseEntity.ok(Map.of(
                    "token", token,
                    "role", role
            ));
        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid email or password"));
        } catch (AuthenticationException ex) {
            return ResponseEntity.status(401).body(Map.of("error", "Authentication failed"));
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(Map.of("error", "Server error"));
        }
    }

}
