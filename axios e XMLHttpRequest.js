
//XMLHttpRequest
async function postMessage(msg) {
	var request = new XMLHttpRequest(); 
	request.open("POST", "/log.php");
	request.setRequestHeader("Content-Type", "text/plain; charset=UTF-8");
	await request.send(msg); //msg deve ser text/plain
	//tratar resposta e erro.
}
//postMessage('Hello mundo')


////Axios
//importar o axios no navegador(CDN) ou no Node.js('npm install axios')
import axios from 'axios';
async function buscarUsuarioGitHub(username) {
  try {/*requisiçao http get para api*/
    const response = await axios.get(`https://github.com{username}`);
    const usuario = response.data; /*data em json*/
    
    console.log(`Nome: ${usuario.name}`);
    console.log(`Biografia: ${usuario.bio}`);
    console.log(`Seguidores: ${usuario.followers}`);
    
  } catch (error) {
    console.error("Erro ao buscar usuário:", error.message);
  }
}
buscarUsuarioGitHub('octocat');
