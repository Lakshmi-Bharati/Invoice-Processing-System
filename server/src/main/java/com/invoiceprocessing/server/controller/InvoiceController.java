package com.invoiceprocessing.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.invoiceprocessing.server.model.Invoice;
import com.invoiceprocessing.server.services.InvoiceService;

@RestController
public class InvoiceController {
	
	@Autowired
	InvoiceService invoiceService;
	
	@PostMapping("/invoice")
	public Invoice addInvoice(@RequestBody Invoice invoice)
	{
		return this.invoiceService.addInvoice(invoice);
	}
}




































