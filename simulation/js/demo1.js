var rightconnection=false;
var datapoints1 = [];
jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }
               
            });
        },

    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
         endpoint1 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth:4  , stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare1 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint1);
        },
         endpoint2 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth : 4, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare2 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint2);
        },
         endpoint3 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth : 4, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare3 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint3);
        },
         endpoint4 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth : 4, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare4 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint4);
        },
         endpoint5 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth : 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare5 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint5);
        },
         endpoint6 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth : 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare6 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint6);
        },
         endpoint7 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth : 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare7 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint7);
        },
         endpoint8 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth : 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare8 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint8);
        },
         endpoint9 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth : 4, stroke: "rgba(25,247,1)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare9 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint9);
        },
         endpoint10 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth : 4, stroke: "rgba(25,247,1)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare10 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint10);
        },
         endpoint11 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth : 4, stroke: "rgba(25,247,1)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare11 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint11);
        },
         endpoint12 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth : 4, stroke: "rgba(25,247,1)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare12 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint12);
        },
         endpoint13 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth : 4, stroke: "yellow" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare13 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint13);
        },
         endpoint14 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth : 4, stroke: "yellow" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare14 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint14);
        },
         endpoint15 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth : 4, stroke: "green" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare15 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint15);
        },
         endpoint16 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth : 4, stroke: "green" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare16 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint16);
        },
        
         endpoint21 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth : 4, stroke: "yellow" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare21 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint21);
        },
         endpoint22 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 5, stroke: "yellow" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare22 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint22);
        },

    // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "images/littledot.png" } ],
        
        Connector: [ "Bezier", { curviness: -50 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare1("ld1"),
            e2 = prepare2("ld2"),
            e3 = prepare3("ld3"),
            e4 = prepare4("ld4"),
            e5 = prepare5("ld5"),
            e6 = prepare6("ld6"),
            e7 = prepare7("ld7"),
            e8 = prepare8("ld8"),
            e9 = prepare9("ld9"),
            e10 = prepare10("ld10"),
            e11 = prepare11("ld11"),
            e12 = prepare12("ld12"),
            e13 = prepare13("ld13"),
            e14 = prepare14("ld14"),
            e15 = prepare15("ld15"),
            e16 = prepare16("ld16"),
           
            e21 = prepare21("ld21"),
            e22 = prepare22("ld22"),
            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            instance.on(document.getElementById("clear"), "click", function (e) {
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });


        
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);


document.getElementById("check-button").addEventListener("click", function () {
        var correct_connections_1_3 = [
            {
                "source": "ld1",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld1"
            }
        ];

        var correct_connections_2_4= [
            {
                "source": "ld2",
                "target": "ld4"
            },
    
            {
                "source": "ld4",
                "target": "ld2"
            }
        ];
        var correct_connections_5_7 = [
            {
                "source": "ld5",
                "target": "ld7"
            },
    
            {
                "source": "ld7",
                "target": "ld5"
            }
        ];
         var correct_connections_6_8 = [
            {
                "source": "ld6",
                "target": "ld8"
            },
    
            {
                "source": "ld8",
                "target": "ld6"
            }
        ];
         var correct_connections_9_11 = [
            {
                "source": "ld9",
                "target": "ld11"
            },
    
            {
                "source": "ld11",
                "target": "ld9"
            }
        ];
         var correct_connections_10_12 = [
            {
                "source": "ld10",
                "target": "ld12"
            },
    
            {
                "source": "ld12",
                "target": "ld10"
            }
        ];
         var correct_connections_13_21 = [
            {
                "source": "ld13",
                "target": "ld21"
            },
    
            {
                "source": "ld21",
                "target": "ld13"
            }
        ];
         var correct_connections_14_22 = [
            {
                "source": "ld14",
                "target": "ld22"
            },
    
            {
                "source": "ld22",
                "target": "ld14"
            }
        ];
         var correct_connections_15_16 = [
            {
                "source": "ld15",
                "target": "ld16"
            },
    
            {
                "source": "ld16",
                "target": "ld15"
            }
        ];
        

        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld4"
            },
    
            {
                "source": "ld4",
                "target": "ld2"
            },
            {
                "source": "ld5",
                "target": "ld7"
            },
    
            {
                "source": "ld7",
                "target": "ld5"
            },
             {
                "source": "ld6",
                "target": "ld8"
            },
    
            {
                "source": "ld8",
                "target": "ld6"
            },
             {
                "source": "ld9",
                "target": "ld11"
            },
    
            {
                "source": "ld11",
                "target": "ld9"
            },
             {
                "source": "ld10",
                "target": "ld12"
            },
    
            {
                "source": "ld12",
                "target": "ld10"
            },
             {
                "source": "ld13",
                "target": "ld21"
            },
    
            {
                "source": "ld21",
                "target": "ld13"
            },
             {
                "source": "ld14",
                "target": "ld22"
            },
    
            {
                "source": "ld22",
                "target": "ld14"
            },
             {
                "source": "ld15",
                "target": "ld16"
            },
    
            {
                "source": "ld16",
                "target": "ld15"
            },
            
            
         ];
         var actual_connections = instance.getAllConnections();

        var is_connected_1_3= false;
        var is_connected_2_4 = false;
        var is_connected_5_7 = false;
        var is_connected_6_8 = false;
        var is_connected_9_11 = false;
        var is_connected_10_12 = false;
        var is_connected_13_21 = false;
        var is_connected_14_22 = false;
        var is_connected_15_16 = false;
       

        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_3){
                is_connected_1_3= correct_connections_1_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_2_4){
                is_connected_2_4 = correct_connections_2_4.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_5_7){
                is_connected_5_7 = correct_connections_5_7 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_6_8){
                is_connected_6_8 = correct_connections_6_8 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_9_11){
                is_connected_9_11 = correct_connections_9_11 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_10_12){
                is_connected_10_12 = correct_connections_10_12 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_13_21){
                is_connected_13_21 = correct_connections_13_21 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_14_22){
                is_connected_14_22 = correct_connections_14_22 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_15_16){
                is_connected_15_16 = correct_connections_15_16 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
       
        if ( is_connected_1_3&&is_connected_2_4&&is_connected_5_7&&is_connected_6_8&&is_connected_9_11&&is_connected_10_12&&is_connected_13_21&&is_connected_14_22&&is_connected_15_16 && !unallowed_connection_present) {
            alert("correct connection");
            rightconnection=true;
             document.getElementById("mcbb").disabled = false;
            document.getElementById("mcbb").classList.remove("disabled");
            return;
            }
        else if(!unallowed_connection_present){
                               alert("Please complete connection");
                               }
            else {
               alert("WRONG CONNECTION");
                return;
            } 
    });
});

//Scripting of mcb begins


var mcboffstate=true;
var were=240;
function mcbonoff()
{   

    if(rightconnection==false)
    {
        alert("Alert ! Please complete the connection first.");
    }
   else
    {
        if (mcboffstate==true)
        {       
            
             mcboffstate=false;
        
    
        document.getElementById('select_1').disabled = false;
        document.getElementById('select_2').disabled = false;
        document.getElementById('select_3').disabled = false;
        document.getElementById('select_4').disabled = false;
        document.getElementById('select_5').disabled = false;
        document.getElementById('mcbb').src="images/mcb2.png";
          $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 0.00, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 5,
    });
    
   
    });
        
        
         
    

          
     }  }     
}

//Scripting of mcb ends

//Scrypting of table begins
var op1= document.getElementById("select_1");

var op2 = document.getElementById("select_2");
var op3= document.getElementById("select_3");
var op4= document.getElementById("select_4");
var op5= document.getElementById("select_5");

var attcounter=1;
function addtotable()
        {
          if(op1.value==4&&op2.value==8&&op3.value==9&&op4.value==13&&op5.value==17 )
       {
           
            var currentVal1 = attcounter++;
  var currentVal2 = 1000;
  var currentVal3 = 1000;
  
  var currentVal4 = 0.1+0.01;
  var currentVal5 = 0.11;

  
  
  
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
 
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
   td5.innerHTML=currentVal5;
  
  document.getElementById("tb1").appendChild(tr);

}
else if(op1.value==4&&op2.value==8&&op3.value==10&&op4.value==14&&op5.value==18)
       {
    var currentVal1 = attcounter++;
  var currentVal2 = 1000;
  var currentVal3 = 1000;
  
  var currentVal4 = 0.2+0.02;
  var currentVal5 = 0.22;
  
  
  
  
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
 
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
   td5.innerHTML=currentVal5;
 
  document.getElementById("tb1").appendChild(tr);
}
else if(op1.value==3&&op2.value==7&&op3.value==12&&op4.value==15&&op5.value==19)
       {
           
              var currentVal1 = attcounter++;
  var currentVal2 = 100;
  var currentVal3 = 100;
  
  var currentVal4 = 0.4+0.08;
  var currentVal5 = 0.48;
  
  
  
  
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
 
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
   td5.innerHTML=currentVal5;
 
  document.getElementById("tb1").appendChild(tr);

}
else if(op1.value==3&&op2.value==7&&op3.value==11&&op4.value==16&&op5.value==20)
       {
           
             var currentVal1 = attcounter++;
  var currentVal2 = 100;
  var currentVal3 = 100;
  
  var currentVal4 = 0.6+0.07;
  var currentVal5 = 0.67;
  
  
  
  
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
 
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
   td5.innerHTML=currentVal5;
 
  document.getElementById("tb1").appendChild(tr);
  
   
}

else
{
    
    
    

    alert("WRONG COMBINATION");
                return;
    
}


}




var e = document.getElementById("select_1");
var strUser = e.options[e.selectedIndex].value;
var value = 0;
e.onchange = function(){  
    value = this.value;
   
    if (this.value == 1) {
            
    
        range911();
         $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 15.26, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 5,
    });
    
   
    });
        
        
    }    
    if (this.value == 2) {
           
        range912();
         $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 15.87, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 5,
    });
    
   
    });
        
        
        
    }  
    if (this.value == 3) {
       
   
        range913();
         $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 15.51, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 5,
    });
    
   
    });
        
        
       
    }
    if (this.value == 4) {
     
        range914();
         $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 15.93, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 5,
    });
    
   
    });

        
    }
   
   
};
var i = document.getElementById("select_2");
var strUser = i.options[i.selectedIndex].value;
var value = 0;
i.onchange = function(){  
    value = this.value;
   
    if (this.value == 5) {
         
     
        range921();
         $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 14.29, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 5,
    });
    
   
    });
       
    }    
    if (this.value == 6) {
        range922();
         $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value:14.37, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 5,
    });
    
   
    });
    }  
    if (this.value == 7) {
       
      
        range923();
        $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 14.63, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 5,
    });
    
   
    });
       
    }
    if (this.value == 8) {
       
   
        range924();
         $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 14.91, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 5,
    });
    
   
    });
       
    }
     
};
var j = document.getElementById("select_3");
var strUser = j.options[j.selectedIndex].value;
var value = 0;
j.onchange = function(){  
    value = this.value;
   
    if (this.value == 9) {
         
    
        range931();
         $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 13.33, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 5,
    });
    
   
    });
       
    }    
    if (this.value == 10) {
         
        range932();
         $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 13.55, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 5,
    });
    
   
    });
    }  
    if (this.value == 11) {
       
    
        range933();
         $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 13.73, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 5,
    });
    
   
    });
       
       
    }
    if (this.value == 12) {
     
    
        range934();
         $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 13.69, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 5,
    });
    
   
    });
        
    }
    
   
};


var m = document.getElementById("select_4");
var strUser = m.options[m.selectedIndex].value;
var value = 0;
m.onchange = function(){  
    value = this.value;
   
    if (this.value == 13) {
         
   
        range941();
       $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 16.27, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 5,
    });
    
   
    });
    }    
    if (this.value == 14) {
       
        range942();
         $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 12.78, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 5,
    });
    
   
    });
       
    }  
    if (this.value == 15) {
       
    
        range943();
         $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 12.55, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 5,
    });
    
   
    });
       
       
    }
    if (this.value == 16) {
      
    
        range944();
         $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 12.98, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 5,
    });
    
   
    });
      
    }
    };


var l = document.getElementById("select_5");
var strUser = l.options[l.selectedIndex].value;
var value = 0;
l.onchange = function(){  
    value = this.value;
   
    if (this.value == 17) {
         
   
        range951();
      
    }    
    if (this.value == 18) {
       
        range952();
       
    }  
    if (this.value == 19) {
       
    
        range953();
       
       
    }
    if (this.value == 20) {
      
    
        range954();
      
    }
    
   
};

var k = document.getElementById("select_5");
var strUser = k.options[k.selectedIndex].value;
var value = 0;
k.onchange = function(){  
    value = this.value;
   
    if (this.value == 17&&op1.value==4&&op2.value==8&&op3.value==9&&op4.value==13) {
        range951();
         
     $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 0.19, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant:5
    });
    
   
    });
    
      
    }    
    else if (this.value == 18&&op1.value==4&&op2.value==8&&op3.value==10&&op4.value==14) {
        range952();
       
        $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 0.12, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant:5
    });
    
   
    });  
       
    }  
   else if (this.value == 19&&op1.value==3&&op2.value==7&&op3.value==12&&op4.value==15) {
    range953();
        $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 0.11, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant:5
    });
    
   
    }); 
    
        
       
       
    }
    else if (this.value == 20&&op1.value==3&&op2.value==7&&op3.value==11&&op4.value==16) {
        range954();
      
      $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 0.09, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant:5
    });
    
   
    });
        
      
    }
    else
    {
         $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 16.71, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant:5
    });
    
   
    });

    }
    
   
};


var range90 =  document.querySelector('#knob6');


        

function knob()
{
range90.style.transform = 'rotate(190deg)';
}



var range91 =  document.querySelector('#knob1');
var range92 =  document.querySelector('#knob2');
var range93 =  document.querySelector('#knob3');
var range94 =  document.querySelector('#knob4');
var range95 =  document.querySelector('#knob5');

 function range911() {
        range91.style.transform = 'rotate(60deg)';
    
    }
    function range912() {
      range91.style.transform = 'rotate(120deg)'; 
      
  }
  function range913() {
    range91.style.transform = 'rotate(180deg)';
    
  }
   function range914() {
    range91.style.transform = 'rotate(245deg)';

  }
   function range921() {
        range92.style.transform = 'rotate(60deg)';
        
    }
     function range922() {
        
        range92.style.transform = 'rotate(120deg)';
        
    } function range923() {

        range92.style.transform = 'rotate(180deg)';
    
    } function range924() {
        
        range92.style.transform = 'rotate(245deg)';
        
    }
     function range931() {
        range93.style.transform = 'rotate(90deg)';
        
    }
     function range932() {
        
        range93.style.transform = 'rotate(120deg)';
        
    }
     function range933() {
    
        range93.style.transform = 'rotate(270deg)';
    }
     function range934() {
        
        range93.style.transform = 'rotate(300deg)';
    }
     function range941() {
    
        range94.style.transform = 'rotate(90deg)';
    }
     function range942() {
        
        range94.style.transform = 'rotate(150deg)';
    }
     function range943() {
    
        range94.style.transform = 'rotate(210deg)';
    }
      function range944() {
    
        range94.style.transform = 'rotate(270deg)';
    }
     function range951() {
        
        range95.style.transform = 'rotate(90deg)';
    }
     function range952() {
    
        range95.style.transform = 'rotate(120deg)';
    }
     function range953() {
        
        range95.style.transform = 'rotate(180deg)';
    }
     function range954() {
    
        range95.style.transform = 'rotate(240deg)';
    }
      

