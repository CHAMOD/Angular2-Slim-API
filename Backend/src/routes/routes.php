<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;


$app->post('/addFavorite', function(Request $request, Response $response ,$args) {


        $id= $request -> getParam('id');
        $url= $request -> getParam('url');
        $description= $request -> getParam('description');
        $status= $request -> getParam('status');
   

        $sql="INSERT INTO favorite_images (img_id,url,description, status) VALUES (:id, :url, :description,:status)";

        try{
        
          
            $db = new db();
            $db = $db-> connect();
    
            $stmt = $db -> prepare($sql);
        
            $stmt->bindParam(':id',$id);
            $stmt->bindParam(':url',$url);
            $stmt->bindParam(':description',$description);
            $stmt->bindParam(':status',$status);
 
            
            $stmt->execute();
 
    
        }catch (PDOException $e){
            $res["error"]=true;
            $res["msg"]=$e->getMessage();
            echo json_encode($res);
            
        }
    
    });



    $app->post('/removeFavorite', function(Request $request, Response $response ,$args) {
   
        $id= $request -> getParam('id');
  
   

        $sql="DELETE FROM favorite_images WHERE img_id=:id ";

        try{
     
    
            $db = new db();
            $db = $db-> connect();
    
            $stmt = $db -> prepare($sql);
        
            $stmt->bindParam(':id',$id);
         
            
            $stmt->execute();
    
        }catch (PDOException $e){
            $res["error"]=true;
            $res["msg"]=$e->getMessage();
            echo json_encode($res);
            
        }
    
    });


    $app->post('/removeDescription', function(Request $request, Response $response ,$args) {
   
        $id= $request -> getParam('id');
  
        
     $sql="UPDATE favorite_images SET description=NULL WHERE img_id=:id ";

        try{
        
            $db = new db();
            $db = $db-> connect();
    
            $stmt = $db -> prepare($sql);
        
            $stmt->bindParam(':id',$id);
         
            
            $stmt->execute();
    
          
        
    
        }catch (PDOException $e){
            $res["error"]=true;
            $res["msg"]=$e->getMessage();
            echo json_encode($res);
            
        }
    
    });


    $app->get('/getFavoriteImages', function (Request $request, Response $response) {
        $res=array();
        $returnData=array();
        $sql = "SELECT *  FROM favorite_images";
    
    
        try{
            $db = new db();
            $db = $db-> connect();
    
            $stmt = $db -> query($sql);
    
            $items = $stmt ->fetchAll(PDO::FETCH_OBJ);
            $db =null;
    
            echo json_encode($items);
    
        }catch (PDOException $e){
            $res['error']=true;
            $res['msg']=$e->getMessage();
            echo json_encode($res);
        }
    });

