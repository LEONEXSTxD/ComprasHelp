<?php
 $name = "teste";
       header("application/force-download");
       header("Content-Type:application/msword");
       header("Content-Disposition: attachment; filename=$name");
       
       $teste = " 
<html xmlns:v=\"urn:shemas-microsoft-com:vml\"
      xmlns:o=\"urn:shemas-microsoft-com:office:office\"
      xmlns:w=\"urn:shcemas-microsoft-com:office:word\"
      xmlns:m=\"http://shemas.microsoft.com/office/2004/12/omml\"
      xmlns=\"http://www.w3.org/TR/REC-html140\">";

      echo $teste;
      echo"<label> af </label>";


?>>