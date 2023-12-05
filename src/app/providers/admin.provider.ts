import { Injectable } from "@angular/core";
import { Admin } from '../models/admin/admin';

@Injectable({
    providedIn: 'root'
})

export class AdminProvider {
    currentAdmin: Admin | null = null;
}