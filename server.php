<?php
//converto il testo json in un array php
$todo_list = json_decode($data, true);

var_dump($todo_list);
?>