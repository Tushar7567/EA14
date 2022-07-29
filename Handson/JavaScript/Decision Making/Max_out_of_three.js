
const Max_out_of_three = (A,B,C) => {
    if(A==B && B==C){
      return '-1';
    }
    if(A>B){
      if(A>C){
        return A;
      }
      else{
        return C;
      }
    }
    else{
      if(B>C){
        return B;
      }
      else{
        return C;
      }
    }
  
  };
  
  