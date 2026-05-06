import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deposit } from '../models/deposit';

@Injectable({
  providedIn: 'root'
})
export class DepositService {
  private apiUrl = 'http://localhost:8080/api/deposits';

  constructor(private http: HttpClient) { }

  getDeposits(): Observable<Deposit[]> {
    return this.http.get<Deposit[]>(this.apiUrl);
  }

  rollGacha(): Observable<Deposit> {
    return this.http.get<Deposit>(`${this.apiUrl}/gacha`, {});
  }

  payDeposit(id: number): Observable<Deposit> {
    return this.http.put<Deposit>(`${this.apiUrl}/${id}/pay`, {});
  }
}
