import { HttpClient,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/app-constants';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  
  constructor(private http:HttpClient) { }

  

  login(usuario){
   
    
    
    const options = {
      headers: { 'Content-Type': ['application/json'] }
    };

    return this.http.post(AppConstants.baseLogin,JSON.stringify(usuario),(options)).subscribe(data =>{

       var token = JSON.parse(JSON.stringify(data)).token;

       localStorage.setItem("token", token);
        console.info(token)

      });

  
  
    }
          
  }
