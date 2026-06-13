// provide data in the DOT language
var DOTstring = 'graph { node[label = "",color = "#000",fillcolor = "#000"] 01; 02 -- {03 05}; 03 -- {04 05}; 04 -- {05 06 07}; 05 -- {06}; 06 -- {07 15}; 07 -- {08 09 10 15}; 08 -- {09 11 12}; 09 -- {10 11}; 10 -- {11 15 20}; 11 -- {12 13 19 20}; 12 -- {13}; 13 -- {14 19}; 14 -- {19 22}; 15 -- {16 20}; 16 -- {17 20 21}; 17 -- {18 21}; 18 -- {21 25 26}; 19 -- {20 22}; 20 -- {21 22 23}; 21 -- {23 24 25}; 22 -- {23}; 23 -- {24}; 24 -- {25 26 29 30}; 25 -- {26}; 26 -- {27 28 29}; 27 -- {28 29 30}; 28 -- {31 33 36}; 29 -- {30}; 30; 31 -- {32 33 34}; 32 -- {34 35}; 33 -- {34 37}; 34 -- {35 38}; 35 -- {40}; 36 -- {37 38 39}; 37 -- {38}; 38 -- {39}; 39; 40 -- {41 43 44}; 41 -- {42}; 42; 43 -- {44 45 46}; 44 -- {45}; 45 -- {46}; 46; 47 }';
var parsedData = vis.parseDOTNetwork(DOTstring);

var graphData = {
    nodes: parsedData.nodes,
    edges: parsedData.edges
}

var options = {
    interaction: {
        zoomView: false,
        hover: true,
        // navigationButtons: true,
    }
};

// create a network
var container = document.getElementById("graph");
var network = new vis.Network(container, graphData, options);
