# Projeto_estoque feito em Angular

Este projeto usa como base Angular [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Sorbe

fiz este projeto com o intuito de melhorar meus conhecimentos da ferramenta angular e ser usual com a finalidade de servir como um sistema de estoque para loja.

## Como usar

para ultilizar é necessario os seguintes passos: 
  + Fazer uma copia do codigo com [git clone https://github.com/LucasOCB/Sistema_de_estoque-Angular.git] 
  + Fazer dowload das dependencias com [npm install]
  + Rodar o servidor [npm start]
  + Rodar a api [npm run api]

## Sobre

 Este projeto só ira funcionar estando na sua maquina pois ainda estou me aprimorando como programador, e a melhor forma que consegui fazer rodar os aquivos de imagem só com angular foi adicionar as imagens na pasta src > app > assets antes ou depois do cadastro do produto.
 Caso o arquivo de imagem esteja na pasta assets ira carregar normalmente.
 Também não dei a devida atenção com diferentes tamanhos de tela, o intuito era ser funcional pelo menos para mim. 

## Usabilidade

  + O sistema como um todo acaba sendo bem simples (para mim) e temas como validação de cadastro e atualização de produto não são tão complexos quanto deveria.
  + Sobre os produtos fiz pensando nos tipos da loja da minha mãe, porem a medida que ia terminando fiz algumas alterações para que a mudança dos produtos não fosse tão difícil como: 
    + todos os inputs do tipo option puxam os tipos possiveis dos proprios modelos que defini na pasta [src > app > modelos], então alterar eles já alteram os inputs.
  + Em relação ao login é so alterar usuario e senha da constant usuariosLogados de [src > app > modelos > loginUsuarios.ts] 

## Banco de dados
  + Este projeto não tem nenhum link com frameworks ou banco de dados etão onde os dados estão sendo guardados é no arquivo [db.json], ENTÃO É DE EXTREMA IMPORTANCIA SABER QUE OS DADOS NÃO ESTÃO SEGUROS pois qualquer alteração no [db.json] feita de forma errada ira "travar o sistema" (ele só não ira carregar os dados) 
