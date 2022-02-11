import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginModel = new User();

  mensagemErro = "";

  mensagemSucesso = "";

  

  onSubmit() {

    // console.log(this.loginModel);
    // let email = this.loginModel.email
    // let senha = this.loginModel.password
    // this.loginModel.email = ""
    // this.loginModel.password = ""
    // console.log(`O email é "${email}" e a senha é "${senha}"`)



    const listaPalavras: string[] = [
      "select ", "from ", "or ", "having ", "exec ", "drop ", "insert ", "group ", "\"", "\'", "*", ";--", ";", "#"
    ];


    let erroEncontrado = 0;

    listaPalavras.forEach(email => {
      if (this.loginModel.email?.toLowerCase().includes(email)) {
        this.mensagemErro = "Dados Inválidos: " + email;
        window.alert(this.mensagemErro);

        erroEncontrado = 1;
      }
    });

    listaPalavras.forEach(senha => {
      if (this.loginModel.password?.toLocaleLowerCase().includes(senha)) {
        this.mensagemErro = "Dados Inválidos: " + senha;
        window.alert(this.mensagemErro);

        erroEncontrado = 1;
      }
    })

    if (erroEncontrado == 0){
      this.loginService.login(this.loginModel).subscribe( (response) => {
        // console.log(response);
        // this.router.navigateByUrl('/');
        
        this.mensagemErro = "";
        this.mensagemSucesso = `Bem-vindo, ${response.body.user.nome}!`;
        window.alert('Você logou com sucesso!');

      }, (respostaErro) => {
        this.mensagemErro = respostaErro.error;
        console.log(respostaErro);
        window.alert('E-mail ou Senha incorretos!');
    
      } )
    };
  }
}
