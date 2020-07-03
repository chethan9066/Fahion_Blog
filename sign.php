<?php

 $str=$_POST['email'];
 $txt='signUp.txt';
 if($str==NULL)
 {
    echo "<script>alert('Enter the E-mail')</script>";
    include "men_main.html";
    exit();
  }
$fr=fopen("signUp.txt","r");
$line = fgets($fr);
$arr=explode('-',$line);
$len=sizeof($arr);
 $name=explode('@',$str);

for($i=0;$i<$len;$i++)
{
  if($arr[$i]==$str)
  {

     echo "<script>alert('Welcome! Back...')</script>";
     echo "<h4>Welcome To ".$name[0]."</h4>";
     include "index.html";
     exit();

  }
}
fclose($fr);

 if(isSet($_POST['email']))
 {
   $f=fopen($txt,'a');
   $txt=$_POST['email'].'-';
    fwrite($f,$txt); // Write information to the file
    fclose($f);
    echo "<script>alert('Thank you! For Subscribe....')</script>";
    echo "<h4>Welcome To ".$name[0]."</h4>";
  include "men_main.html";
 }
 else {
   die("<script>alert('Enter The E-mail')</script>");

 }

?>
