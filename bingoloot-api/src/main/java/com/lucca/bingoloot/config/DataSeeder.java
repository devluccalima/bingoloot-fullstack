package com.lucca.bingoloot.config;

import com.lucca.bingoloot.models.Deposit;
import com.lucca.bingoloot.repositories.DepositRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final DepositRepository depositRepository;

    public DataSeeder(DepositRepository depositRepository) {
        this.depositRepository = depositRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (depositRepository.count() == 0) {
            System.out.println("⚔️ Dropando o loot inicial no banco de dados...");

            for (int i = 1; i <= 200; i++) {
                Deposit deposit = new Deposit(i, (double) i, false);
                depositRepository.save(deposit);
            }

            System.out.println("✅ Todos os 200 depósitos foram gerados com sucesso!");
        } else {
            System.out.println("🛡️ O banco de dados já possui o loot guardado.");
        }
    }
}
