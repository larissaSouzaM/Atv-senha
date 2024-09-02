
const prompt = require('prompt-sync')(); 
const entrada = prompt;
var senhacorreta = 1234;
var senhausuario = entrada('Digite a senha:');
if (senhausuario == senhacorreta){
  console.log(`acesso permitido`);
}
while(senhausuario !=senhacorreta){
  console.log(`acesso negado`);
  var senhatentativa = entrada ( "Digite a senha: ");
  if (senhatentativa == senhacorreta){
    console.log(`acesso permitido`);}
  break;
  }
