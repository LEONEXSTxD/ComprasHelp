<?php

$name = "mkdlfor";
header("application/force-download");
header("Content-Type:application/msword");
header("Content-Disposition: attachment: filename=$name");

$imprimir="
<html xmlns:v=\"urn:schemas-microsoft-com:vml\"
<xmlns:o=\"urn:schemas-microsoft-com:office:office\"
<xmlns:w=\"urn:schemas-microsoft-com:office:word\"
<xmlns:m=\"http://schemas-microsoft.com/office/2004/12/omml\"
<xmlns:v=\"http://www.w3.org/TR/REC-html40\">";

echo $imprimir;

echo "<label> af </label>"

?>>