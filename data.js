var APP_DATA = {
  "scenes": [
    {
      "id": "0-eingang",
      "name": "Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.15809692815192555,
          "pitch": 0.5451430317868429,
          "rotation": 0,
          "target": "1-tr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-tr",
      "name": "Tür",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4672457318209613,
          "pitch": 0.998431466991935,
          "rotation": 0,
          "target": "0-eingang"
        },
        {
          "yaw": 2.6630176012107576,
          "pitch": 0.674370254539097,
          "rotation": 0,
          "target": "8-hinten"
        },
        {
          "yaw": -1.2380101494648343,
          "pitch": 0.49103702094075175,
          "rotation": 0,
          "target": "2-essraum1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-essraum1",
      "name": "Essraum1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0369884228644555,
          "pitch": 0.596400787695428,
          "rotation": 0,
          "target": "1-tr"
        },
        {
          "yaw": -2.6285174712109995,
          "pitch": 0.7843264756585313,
          "rotation": 0,
          "target": "3-essraum2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-essraum2",
      "name": "Essraum2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05038513657997967,
          "pitch": 0.6648160289611127,
          "rotation": 0,
          "target": "2-essraum1"
        },
        {
          "yaw": -1.7019486711948062,
          "pitch": 0.7456878193303034,
          "rotation": 0,
          "target": "4-essraum2rein"
        },
        {
          "yaw": 2.9533777556732144,
          "pitch": 0.7659957762785403,
          "rotation": 0,
          "target": "5-essraum3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-essraum2rein",
      "name": "Essraum2rein",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09423437409936675,
          "pitch": 0.642772907486135,
          "rotation": 0,
          "target": "3-essraum2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-essraum3",
      "name": "Essraum3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9181971608169786,
          "pitch": 0.711610373677674,
          "rotation": 0,
          "target": "3-essraum2"
        },
        {
          "yaw": -0.8479788835038526,
          "pitch": 0.77062949335299,
          "rotation": 0,
          "target": "6-essraum3rein"
        },
        {
          "yaw": -2.501631413479819,
          "pitch": 0.7246069403173898,
          "rotation": 0,
          "target": "7-essraumende"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-essraum3rein",
      "name": "Essraum3rein",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0016654218734917,
          "pitch": 0.7541741951833423,
          "rotation": 0,
          "target": "5-essraum3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-essraumende",
      "name": "EssraumEnde",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8348511167822856,
          "pitch": 0.7846484730380734,
          "rotation": 0,
          "target": "5-essraum3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-hinten",
      "name": "Hinten",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3151473811963257,
          "pitch": 0.5552784509060196,
          "rotation": 0,
          "target": "1-tr"
        },
        {
          "yaw": 1.1334392871355448,
          "pitch": 0.6326549049731227,
          "rotation": 0,
          "target": "9-hintenecke"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-hintenecke",
      "name": "HintenEcke",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0915062854999604,
          "pitch": 0.58968427243693,
          "rotation": 0,
          "target": "8-hinten"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
