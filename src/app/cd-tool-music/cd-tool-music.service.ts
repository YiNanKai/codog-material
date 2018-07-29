import {Injectable} from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class CdToolMusicService{
    constructor(private http:Http){
    }

    getAllAudios():Promise<any>{

        return this.http.get('https://jsonplaceholder.typicode.com/albums')
                        .toPromise()
                        .then(res => res.json().data)
    }
}