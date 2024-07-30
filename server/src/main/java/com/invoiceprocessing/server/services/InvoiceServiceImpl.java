package com.invoiceprocessing.server.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.invoiceprocessing.server.dao.InvoiceDao;
import com.invoiceprocessing.server.model.Invoice;

public class InvoiceServiceImpl implements InvoiceService {

	@Autowired
	InvoiceDao invoiceDao;
	
	@Override
	public Invoice addInvoice(Invoice invoice) {
		invoiceDao.save(invoice);
		return invoice;
	}

}
