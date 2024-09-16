package com.example.demo.service;

import java.util.List;

import com.example.demo.Entity.Product;

public interface ProductService {
public Product saveProduct(Product product);

public List<Product> getAllProduct();

public Product getProductById(Integer id);

public String deleteProduct(Integer id);

public Product editProduct(Product product,Integer id);

}