import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private supabase: SupabaseService) {}

  async login(email: string, password: string) {
    return await this.supabase.client.auth.signInWithPassword({
      email,
      password
    });
  }

  async logout() {
    return await this.supabase.client.auth.signOut();
  }

  async getSession() {
    return await this.supabase.client.auth.getSession();
  }
}