import React, { Component } from 'react';
import cytoscape from 'cytoscape';
import cydagre from 'cytoscape-dagre';

cydagre(cytoscape);

let cyStyle = {
    width: '1000px',
    height: '700px',
    display: 'block'
};

let conf = {
    boxSelectionEnabled: false,
    autounselectify: true,
    zoomingEnabled: true,
    style: [
        {
            selector: 'node',
            style: {
                'label': 'hi',
                'width': '50px',
                'shape':'rectangle',
                'content': (ele) => {
                    return ele.data().id;
                },
                'text-valign': 'center',
                'text-halign': 'center',
                'color': '#FFF',
                'background-color': function (ele) {
                    const nodeData = ele.data();
                    switch (nodeData.completed) {
                        case 'true':
                            return "#3F51B5";
                        case 'maybe':
                            return "#009688";
                        case 'false':
                            return "#F44336";
                        default:
                            return "white";
                    }
                }
            }
        },
        {
            selector: 'edge',
            style: {
                'width': 1,
                "curve-style": "bezier",
                'target-arrow-shape': 'triangle-backcurve',
                'line-color': '#AAA',
                'target-arrow-color': '#AAA',
                'arrow-scale': '0.8',
            }
        }
    ],
    layout: {
        name: 'cose'
    }
};

class DependencyGraph extends Component {
    constructor(props) {
        super(props);
        this.state = { cy: {} }
    }

    componentDidMount() {
        conf.container = this.cyRef;
        conf.elements = {
                nodes: [
                    { data: { id: '31', completed: "true"} },
                    { data: { id: '32', completed: "true" } },
                    { data: { id: '33', completed: "true" } },
                    { data: { id: '35L', completed: "maybe" } },
                    { data: { id: '111' , completed: "maybe"} },
                    { data: { id: '130', completed: "false" } },
                    { data: { id: '131', completed: "false" } },
                    { data: { id: '168' , completed: "maybe"} },
                    { data: { id: '172' , completed: "maybe"} },
                    { data: { id: '174A' , completed: "maybe"} },
                    { data: { id: '174B', completed: "false" } },
                    { data: { id: '174C' , completed: "false"} },
                    { data: { id: '180' , completed: "maybe"} },
                    { data: { id: '145' , completed: "false"} },
                    { data: { id: '181' , completed: "false"} },
                    { data: { id: '161', completed: "false" } },
                    { data: { id: '170A' , completed: "false"} },
                    { data: { id: '121' , completed: "maybe"} },
                    { data: { id: '122' , completed: "maybe"} },
                    { data: { id: '124' , completed: "maybe"} },
                    { data: { id: '112' , completed: "false"} },
                    { data: { id: '136', completed: "false" } },
                    { data: { id: '118' , completed: "false"} },
                    { data: { id: '119' , completed: "false"} },
                    { data: { id: '143' , completed: "false"} },
                    { data: { id: '144' , completed: "false"} },
                    { data: { id: '132' , completed: "false"} },
                    { data: { id: '137A' , completed: "false"} },
                    { data: { id: '137B' , completed: "false"} },
                ],
                edges: [
                    { data: { source: '31', target: '32', } },
                    { data: { source: '32', target: '33' } },
                    { data: { source: '31', target: '35L' } },
                    { data: { source: '35L', target: '111' } },
                    { data: { source: '33', target: '111' } },
                    { data: { source: '32', target: '111' } },
                    { data: { source: '35L', target: '131' } },
                    { data: { source: '33', target: '131' } },
                    { data: { source: '131', target: '130' } },
                    { data: { source: '111', target: '130' } },
                    { data: { source: '32', target: '168' } },
                    { data: { source: '32', target: '172' } },
                    { data: { source: '32', target: '174A' } },
                    { data: { source: '174A', target: '174B' } },
                    { data: { source: '174A', target: '174C' } },
                    { data: { source: '32', target: '180' } },
                    { data: { source: '180', target: '145' } },
                    { data: { source: '180', target: '181' } },
                    { data: { source: '180', target: '161' } },
                    { data: { source: '180', target: '170A' } },
                    { data: { source: '32', target: '121' } },
                    { data: { source: '32', target: '122' } },
                    { data: { source: '32', target: '124' } },
                    { data: { source: '111', target: '112' } },
                    { data: { source: '111', target: '118' } },
                    { data: { source: '111', target: '143' } },
                    { data: { source: '112', target: '136' } },
                    { data: { source: '118', target: '119' } },
                    { data: { source: '143', target: '144' } },
                    { data: { source: '131', target: '132' } },
                    { data: { source: '131', target: '137A' } },
                    { data: { source: '137A', target: '137B' } },


                ]
            };
        const cys = cytoscape(conf);

        this.setState({'cy': cys})
        // cy.json();
    }

    shouldComponentUpdate() {
        return false;
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.cy) {
            this.state.cy.destroy();
        }
        conf.container = this.cyRef;
        conf.elements = {
                nodes: [
                    { data: { id: 'cat' } },
                    { data: { id: 'bird' } },
                    { data: { id: 'ladybug' } },
                    { data: { id: 'aphid' } },
                    { data: { id: 'rose' } },
                    { data: { id: 'grasshopper' } },
                    { data: { id: 'plant' } },
                    { data: { id: 'wheat' } }
                ],
                edges: [
                    { data: { source: 'cat', target: 'bird', } },
                    { data: { source: 'bird', target: 'ladybug' } },
                    { data: { source: 'bird', target: 'grasshopper' } },
                    { data: { source: 'grasshopper', target: 'plant' } },
                    { data: { source: 'grasshopper', target: 'wheat' } },
                    { data: { source: 'ladybug', target: 'aphid' } },
                    { data: { source: 'aphid', target: 'rose' } }
                ]
            };
        const cys = cytoscape(conf);

        this.setState({'cy': cys})
    }

    componentWillUnmount() {
        if (this.state.cy) {
            this.state.cy.destroy();
        }
    }

    render() {
        return <div style={cyStyle} ref={(cyRef) => {
            this.cyRef = cyRef;
        }}/>
    }
}

export default DependencyGraph;
