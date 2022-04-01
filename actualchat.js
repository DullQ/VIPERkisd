
function send()
{
  if(getElementById(POSS1) =="")
  {
    getElementById(POSS1).innerHTML(getElementById(msg));
  }
  else if(getElementById(POSS2) =="" && getElementById("POSS1") != "")
  {
      getElementById(POSS2).innerHTML(getElementById(msg));
  }
  else if(getElementById(POSS3) == "" && getElementById("POSS2") !="" && getElementById("POSS1") != "")
  {
      getElementById("POSS3").innerHTML(getElementById(msg));
  }
}
