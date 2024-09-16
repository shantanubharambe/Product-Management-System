package com.example.demo.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.apache.coyote.http11.Http11InputBuffer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Product;
import com.example.demo.service.ProductService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {

	@Autowired
	private ProductService productService;

	@PostMapping("/saveProduct")
	public ResponseEntity<?> saveProduct(@RequestBody Product product) {

		return new ResponseEntity<>(productService.saveProduct(product), HttpStatus.CREATED);

	}
     @GetMapping("/")
	public ResponseEntity<?> getAllProduct() {
		List<Product> productList = productService.getAllProduct();
		return new ResponseEntity<>(productList, HttpStatus.OK);

	}
	@GetMapping("/{id}")
	public ResponseEntity<?> getProductById(@PathVariable Integer id) {
		
		return new ResponseEntity<>(productService.getProductById(id),HttpStatus.OK);

	}
	@DeleteMapping("/deleteProduct/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable Integer id) {
		 	return new ResponseEntity<>(productService.deleteProduct(id),HttpStatus.OK);
    }
	@PostMapping("/editProduct/{id}")
	public ResponseEntity<?> editProduct(@RequestBody Product product,@PathVariable Integer id) {
      return new ResponseEntity<>(productService.editProduct(product, id), HttpStatus.CREATED);
		}

	
}