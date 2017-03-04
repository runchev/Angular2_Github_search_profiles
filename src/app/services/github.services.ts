import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{

    private username:string;
    private clientId= '5febd05e1710f2d7568f';
    private clientSecret='21060750fec3ddfbf381c136cf614a43e698813b';

 
    constructor(private _http:Http) {
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.clientId+'&client_secret='+this.clientSecret)
        .map(res=>res.json());
    }
    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.clientId+'&client_secret='+this.clientSecret)
        .map(res=>res.json());
    }    
    updateUsername(username:string){
        this.username=username;
    }
}