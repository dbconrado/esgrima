<?php
class Tarefas {

    protected $conexao = null;

    public function conectar()
    {
        $this->conexao = new PDO("mysql:host=localhost;dbname=tarefas", "root", null);
    }

    public function getTodasTarefas()
    {
        $comando = $this->conexao->prepare("SELECT * FROM tarefa");
        $comando->execute();

        return $comando;
    }
}
?>