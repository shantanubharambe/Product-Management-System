 	package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Product;
import com.example.demo.Repository.ProductRepository;
@Service("productService")
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository productRepo;
	@Override
	public Product saveProduct(Product product) {
		// TODO Auto-generated method stub
		return productRepo.save(product);
	}
    @Override
	public List<Product> getAllProduct() {
		// TODO Auto-generated method stub
		return productRepo.findAll();
	}
	@Override
	public Product getProductById(Integer id) {
		// TODO Auto-generated method stub
		return productRepo.findById(id).get();
	}
	@Override
	public String deleteProduct(Integer id) {
		// TODO Auto-generated method stub
		Product product=productRepo.findById(id).get();
		if(product!=null) {
			productRepo.delete(product);
			return " product Delete successfully......";
		}
		return "something wrong  on server";	
	}
	public Product editProduct(Product p, Integer id) {
	    Product oldProduct = productRepo.findById(id).orElse(null);
	    if (oldProduct != null) {
	        oldProduct.setProductName(p.getProductName());
	        oldProduct.setDescription(p.getDescription());
	        oldProduct.setId(p.getId());
			oldProduct.setPrice(p.getPrice());
			oldProduct.setStatus(p.getStatus());
	        return productRepo.save(oldProduct);
	    } else {
	     
	        return null;
	    }
	}
	
	
}
