import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositService } from './services/deposit.service';
import { Deposit } from './models/deposit';

interface GachaCard {
  id: number;
  amount: number;
  rarity: string;
  rarityLabel: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  appState: 'BOOT' | 'VIDEO' | 'SETUP' | 'INTRO' | 'GACHA' | 'DASHBOARD' = 'BOOT';

  // Nova variável que controla se o sistema está desmanchando
  isClosing = false;

  deposits: Deposit[] = [];
  totalSaved: number = 0;
  slotsPaid: number = 0;
  currentQuest: Deposit | null = null;
  
  playerName: string = 'Caçador';

  isSpinning = false;
  dummyCards: GachaCard[] = [];
  trackOffset: string = '-3190px'; 
  trackTransition: string = 'none';

  constructor(private depositService: DepositService) {}

  ngOnInit(): void {
    this.checkDailyStatus();
    this.loadDeposits();
  }

  checkDailyStatus(): void {
    const savedName = localStorage.getItem('bingoloot_player_name');
    if (!savedName) {
      this.appState = 'BOOT';
      return;
    }
    this.playerName = savedName;
    const lastPaidDate = localStorage.getItem('bingoloot_last_paid');
    const today = new Date().toDateString();

    if (lastPaidDate === today) {
      this.appState = 'DASHBOARD';
    } else {
      this.appState = 'INTRO';
    }
  }

  startSystem(): void {
    this.appState = 'VIDEO';
  }

  onVideoEnd(): void {
    setTimeout(() => {
      this.appState = 'SETUP';
    }, 2000);
  }

  // O Maestro: Segura a tela nova por 1.2s até a atual desmanchar
  transitionToState(newState: 'SETUP' | 'INTRO' | 'GACHA' | 'DASHBOARD'): void {
    if (this.isClosing) return; // Evita duplo clique
    
    this.isClosing = true;
    setTimeout(() => {
      this.appState = newState;
      this.isClosing = false; // A nova tela nasce abrindo
    }, 1200); // Exatos 1.2 segundos da nossa animação SCSS
  }

  savePlayerName(name: string): void {
    if (!name || name.trim() === '') return;
    const finalName = name.trim();
    localStorage.setItem('bingoloot_player_name', finalName);
    this.playerName = finalName;
    
    const lastPaidDate = localStorage.getItem('bingoloot_last_paid');
    const today = new Date().toDateString();

    // Em vez de pular direto, roda a transição de fechamento
    if (lastPaidDate === today) {
      this.transitionToState('DASHBOARD');
    } else {
      this.transitionToState('INTRO');
    }
  }

  get playerRank(): string {
    const p = this.slotsPaid;
    if (p >= 190) return 'S';
    if (p >= 150) return 'A';
    if (p >= 100) return 'B';
    if (p >= 70) return 'C';
    if (p >= 40) return 'D';
    return 'E';
  }

  loadDeposits(): void {
    this.depositService.getDeposits().subscribe({
      next: (data) => {
        this.deposits = data;
        const paid = data.filter(d => d.isPaid);
        this.slotsPaid = paid.length;
        this.totalSaved = paid.reduce((acc, curr) => acc + curr.amount, 0);
      },
      error: (err) => console.error('[ERRO DO SISTEMA]', err)
    });
  }

  getQuestRarity(amount: number): string {
    if (amount >= 180) return 'legendary';
    if (amount >= 150) return 'immortal';
    if (amount >= 120) return 'diamond';
    if (amount >= 100) return 'emerald';
    if (amount >= 70) return 'platinum';
    if (amount >= 50) return 'silver';
    if (amount >= 20) return 'bronze';
    return 'iron';
  }

  getQuestRarityLabel(amount: number): string {
    if (amount >= 180) return 'LENDÁRIO';
    if (amount >= 150) return 'IMORTAL';
    if (amount >= 120) return 'DIAMANTE';
    if (amount >= 100) return 'ESMERALDA';
    if (amount >= 70) return 'PLATINA';
    if (amount >= 50) return 'PRATA';
    if (amount >= 20) return 'BRONZE';
    return 'FERRO';
  }

  startDailyQuest(): void {
    this.transitionToState('GACHA'); // Troca com animação
    
    this.dummyCards = [];
    const unpaidSlots = this.deposits.filter(d => !d.isPaid);
    
    for (let i = 0; i < 80; i++) {
      const randomAmount = unpaidSlots.length > 0 
        ? unpaidSlots[Math.floor(Math.random() * unpaidSlots.length)].amount 
        : Math.floor(Math.random() * 200) + 1;

      this.dummyCards.push({
        id: Math.floor(Math.random() * 200) + 1,
        amount: randomAmount,
        rarity: this.getQuestRarity(randomAmount),
        rarityLabel: this.getQuestRarityLabel(randomAmount)
      });
    }
    this.trackOffset = '-3190px';
  }

  private setupGachaTrack(winningQuest: Deposit): void {
    this.dummyCards = [];
    const unpaidSlots = this.deposits.filter(d => !d.isPaid);

    for (let i = 0; i < 80; i++) {
      const randomUnpaid = unpaidSlots[Math.floor(Math.random() * unpaidSlots.length)];
      this.dummyCards.push({
        id: randomUnpaid.id,
        amount: randomUnpaid.amount,
        rarity: this.getQuestRarity(randomUnpaid.amount),
        rarityLabel: this.getQuestRarityLabel(randomUnpaid.amount)
      });
    }
    
    this.dummyCards[60] = {
      id: winningQuest.id,
      amount: winningQuest.amount,
      rarity: this.getQuestRarity(winningQuest.amount),
      rarityLabel: this.getQuestRarityLabel(winningQuest.amount)
    };
  }

  rollQuest(): void {
    if (this.isSpinning) return;

    this.depositService.rollGacha().subscribe({
      next: (quest) => {
        this.isSpinning = true;
        this.currentQuest = null; 
        this.trackOffset = '-3190px'; 
        this.trackTransition = 'none';

        this.setupGachaTrack(quest);

        setTimeout(() => {
          this.trackTransition = 'transform 1.5s cubic-bezier(0.1, 0.9, 0.2, 1)';
          this.trackOffset = '-9430px'; 
        }, 50);

        setTimeout(() => {
          this.isSpinning = false;
          this.currentQuest = quest; 
        }, 1550);
      },
      error: () => {
        alert('[ SISTEMA ]: Masmorra vazia. Despertar Concluído.');
        this.transitionToState('DASHBOARD');
      }
    });
  }

  confirmDeposit(id: number): void {
    this.depositService.payDeposit(id).subscribe(() => {
      localStorage.setItem('bingoloot_last_paid', new Date().toDateString());
      this.loadDeposits();
      this.currentQuest = null;
      this.transitionToState('DASHBOARD'); // Troca com animação
    });
  }

  forceExtraDeposit(): void {
    this.transitionToState('GACHA'); // Troca com animação
    setTimeout(() => this.startDailyQuest(), 1200);
  }
}