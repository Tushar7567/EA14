const getValue = (a) => {
    switch(true){
      case (a=='P' || a=='p'): return "PrepBytes";
      
      case (a=='Z' || a=='z'): return "Zenith";
      
      case (a=='E' || a=='e'): return "Expert Coder";
      
      case (a=='D' || a=='d'): return "Data Structure";
    }   
  };