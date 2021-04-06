import { HttpClient,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/app-constants';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  
  constructor(private http:HttpClient) { }

  

  login(usuario){
   
    
    return this.http.post(AppConstants.baseLogin,JSON.stringify(usuario)).subscribe(data =>{

      console.info(JSON.parse(JSON.stringify(data)));
    })
    
  }
          
}
