
function setMentor(e){
 mentor = e.demoSelect
 
}
function upload(e){

  var destinationId = '<Change to google drive folder ID>'


  var f1 = e.upload1

  var gno = e.gno 
  var mentor = e.demoSelect

  
   
  if(mentor == "A")
  {
    var destination = DriveApp.getFolderById(destinationId)
    var contents = destination.getFolders()
    var flag = 0
      while(contents.hasNext()) {
    file = contents.next();
    name = file.getName();
    tmp = "<Change to required folder name>" + gno
    if(name == tmp){
      flag = 1
      
    }
    }
    if(flag == 0){
      var new_folder = destination.createFolder("<Change to required folder name>" + gno).getId();
      var createFile1 = DriveApp.getFolderById(new_folder).createFile(f1).setName("<Change to required file name>")

    return true;


    }
  
  return false;
}
}

function getScriptUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;
}


function doGet(e) {

    var op = HtmlService.createHtmlOutputFromFile("index.html")
  op.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
  return op
}
