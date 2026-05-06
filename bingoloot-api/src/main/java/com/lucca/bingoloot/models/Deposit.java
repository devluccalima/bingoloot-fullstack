package com.lucca.bingoloot.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "deposits")
public class Deposit {

    @Id
    private Integer id; // Esse será o número de 1 a 200

    private Double amount; // O valor em Reais (R$ 1,00 a R$ 200,00)

    private Boolean isPaid;

    // Construtor vazio (obrigatório para o Spring)
    public Deposit() {
    }

    // Construtor para facilitar nossa vida
    public Deposit(Integer id, Double amount, Boolean isPaid) {
        this.id = id;
        this.amount = amount;
        this.isPaid = isPaid;
    }

    // Getters e Setters
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public Double getAmount() { return amount; }
    public void setAmount(Double amount) { this.amount = amount; }

    public Boolean getIsPaid() { return isPaid; }
    public void setIsPaid(Boolean isPaid) { this.isPaid = isPaid; }
}
