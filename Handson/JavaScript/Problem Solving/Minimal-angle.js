var Minimal_Angle = (h, m) => 
{
       h = h % 12;
     hh = (h * 360) / 12 + (m* 360) / (12 * 60);
     mm = (m * 360) / (60);
    var angle = Math.abs(hh - mm);
    if (angle > 180) {
        angle = 360 - angle;
    }
 
    return angle; 
};

 
