package com.lucca.bingoloot.repositories;

import com.lucca.bingoloot.models.Deposit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DepositRepository extends JpaRepository<Deposit, Integer> {
    // Ao herdar de JpaRepository, ganhamos métodos como save(), findAll(), findById() de graça!

    // Vamos criar uma query customizada apenas declarando a assinatura do metodo.
    // O Spring lê isso e entende: "Busque todos os depósitos onde o campo isPaid for falso".

    List<Deposit> findByIsPaidFalse();
}
