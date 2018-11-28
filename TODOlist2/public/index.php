
<!DOCTYPE html>
 <html>
 <head>
     <meta charset="UTF-8"/>
     <title>Document</title>
 </head>
 <body>
	<header>
		<p>Tarefa</p>
	</header> 
	<main>
		<form action="adicionar.php" method="POST">
		 <input type="text" name="tarefa">
		 <input type="submit" value="+ Adicionar">
		 </form>

	</main>    
 </body>
 </html>


<?php

require 'Tarefas.php';

$dados = new Tarefas();
$dados->conectar();

$tarefas = $dados->getTodasTarefas();

foreach ($tarefas as $tarefas) {
    echo "<input type=\"checkbox\" name=\"tarefa\">  " .$tarefas['titulo']. " <br>" ;




if (isset($_POST) && sizeof($_POST) > 0) {
    $dados = new Tarefas();
    $dados->adicionar($_POST);
}
  
  
    
}

?>

