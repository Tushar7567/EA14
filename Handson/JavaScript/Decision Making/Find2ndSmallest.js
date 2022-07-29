
const findSndSmallest = (x,y,z) => {
    if(x>=y && x>=z){
      if(y>z){
        return y;
      }
      else{
        return z;
      }
    }
    else if(y>=x && y>=z){
     if(x>z){
        return x;
      }
      else{
        return z;
      } 
    }
    else if(x>=y){
      return x;
    }
    else{
       return y;
     } 
 };
 
 