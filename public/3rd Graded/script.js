function plotPoint(x0_val, y0_val, x_val, y_val) {
    document.getElementById('in1').innerHTML = x0_val + " " + y0_val + " " + x_val + " " + y_val;

    var point = document.createElement('div');
    point.className = 'point';

    point.style.left = (x_val - x0_val + 200 - 5) + 'px'; 
    point.style.bottom = (y_val - y0_val + 200 - 5) + 'px'; 
  
    document.getElementById('coordinatePlane').appendChild(point);

    var out1 = document.getElementById('out1');
    
    if (x_val > x0_val && y_val > y0_val) {
      out1.innerHTML = "NE";
    }
    else if (x_val < x0_val && y_val < y0_val) {
      out1.innerHTML = "SO";
    }
    else if (x_val > x0_val && y_val < y0_val) {
      out1.innerHTML = "SE";
    }
    else if (x_val < x0_val && y_val > y0_val) {
      out1.innerHTML = "NO";
    }
    else {
      out1.innerHTML = "divisa";
    }
}