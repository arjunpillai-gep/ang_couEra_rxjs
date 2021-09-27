import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Leaders } from '../shared/leaders';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  constructor() { }
  getLeader():Leader[]{
    return Leaders
  }
  getParticularLeader(id:string):Leader{
    return Leaders.filter(data=>data.id===id)[0]
  }
}
