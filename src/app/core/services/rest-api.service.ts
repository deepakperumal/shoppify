import { Injectable } from '@angular/core'
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { StorageService } from 'core/services/storage.service'

@Injectable()

export class RestApiService
{

  constructor(private http: HttpClient,private storageService:StorageService) { }

  getHeaders() {
    const token = this.storageService.getItem('token');
    return token ? new HttpHeaders().set('auth-token', token) : null; 
  }
 
  get(link: string) {
    return this.http.get(link, { headers: this.getHeaders() });
  }

  post(link: string, body: any) {
    return this.http.post(link, body, { headers: this.getHeaders() });
  }



}