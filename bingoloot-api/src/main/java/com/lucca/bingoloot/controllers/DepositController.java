package com.lucca.bingoloot.controllers;

import com.lucca.bingoloot.models.Deposit;
import com.lucca.bingoloot.repositories.DepositRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/api/deposits")
@CrossOrigin(origins = "*") // Isso aqui é a magia que vai deixar o Angular conversar com o Java depois sem dar erro de segurança
public class DepositController {

    private final DepositRepository depositRepository;

    public DepositController(DepositRepository depositRepository) {
        this.depositRepository = depositRepository;
    }

    // 1. Rota para listar toda a tabela (O mapa completo)
    @GetMapping
    public List<Deposit> getAll() {
        return depositRepository.findAll();
    }

    // 2. Rota do Gacha: Sorteia uma missão para o Lioras
    @GetMapping("/gacha")
    public ResponseEntity<Deposit> rollQuest() {
        List<Deposit> pending = depositRepository.findByIsPaidFalse();

        if (pending.isEmpty()) {
            return ResponseEntity.notFound().build(); // Se estiver vazio, significa que você já juntou os 20.100!
        }

        Random rand = new Random();
        Deposit quest = pending.get(rand.nextInt(pending.size()));

        return ResponseEntity.ok(quest);
    }

    // 3. Rota para marcar um depósito como pago (O "Level Up")
    @PutMapping("/{id}/pay")
    public ResponseEntity<Deposit> payDeposit(@PathVariable Integer id) {
        return depositRepository.findById(id)
                .map(deposit -> {
                    deposit.setIsPaid(true); // Marca como pago
                    Deposit updated = depositRepository.save(deposit); // Salva no banco
                    return ResponseEntity.ok(updated);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
