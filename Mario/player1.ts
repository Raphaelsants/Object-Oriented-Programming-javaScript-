/* Revisão 

O que eu tenho? - ATRIBUTOS - CARACTERIÍSTICAS
Que coisas eu faço? - MÉTODOS - COMPORTAMENTO
Como eu estou? - ESTADOS - ESTATO
*/

class Player {
    //Definindo padrão dos atributos 

    nome: string;
    vidas: number;
    invencivel: boolean;
    crush: Player;
    // Criando método

    sinopse(){
        // Definição de estado

   console.log(`O portagonista do jogo é o ${mario.nome}.\n Que tem como objetivo salvar a Princesa ${peach.nome},das mãoes do ${donkey.nome},`);
   /*console.log(`A crush do Mario é a ${mario.crush.nome}`)*/

    }
}
const mario = new Player();
mario.nome = "Mario";
mario.vidas = 3;
mario.invencivel = true;

const peach = new Player();
peach.nome = "Peach";
peach.vidas = 3;
peach.invencivel = false;

mario.crush = peach 


const donkey = new Player();
donkey.nome = "Donkey Kong";
donkey.vidas = 3;
donkey.invencivel = false;

donkey.crush = mario

mario.sinopse();
//strictPropertyInitialization - Para poder rodar sem inicializar as variaveis, em casos de não utilizar explicitamente o método construtor.
