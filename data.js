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
          "yaw": -0.08236371352235139,
          "pitch": 0.5376095640675018,
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
          "yaw": 0.48912921924036823,
          "pitch": 1.0875254259801181,
          "rotation": 0,
          "target": "0-eingang"
        },
        {
          "yaw": -1.2131244651927204,
          "pitch": 0.5783160347149554,
          "rotation": 0,
          "target": "2-essraum1"
        },
        {
          "yaw": 2.6568534832306767,
          "pitch": 0.6630414788238994,
          "rotation": 0,
          "target": "8-hinteressraum"
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
          "yaw": 2.077510610185753,
          "pitch": 0.488668555678224,
          "rotation": 0,
          "target": "1-tr"
        },
        {
          "yaw": -2.6065454309352756,
          "pitch": 0.7691713861861853,
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
          "yaw": -0.11925716020762955,
          "pitch": 0.6527314878231163,
          "rotation": 0,
          "target": "2-essraum1"
        },
        {
          "yaw": -1.6967714526944615,
          "pitch": 0.6804836063082735,
          "rotation": 0,
          "target": "4-essraum2rein"
        },
        {
          "yaw": 2.9792402835016034,
          "pitch": 0.6801695059699995,
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
          "yaw": 0.13044444614099504,
          "pitch": 0.7922929740511506,
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
          "yaw": 0.9012047413332507,
          "pitch": 0.665092658675837,
          "rotation": 0,
          "target": "3-essraum2"
        },
        {
          "yaw": -0.8526586378747183,
          "pitch": 0.7069272782620502,
          "rotation": 0,
          "target": "6-essraum3rein"
        },
        {
          "yaw": -2.509818934848102,
          "pitch": 0.6920590707494423,
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
      "linkHotspots": [],
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "8-hinteressraum",
      "name": "Hinteressraum",
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
          "yaw": -1.3049975891988836,
          "pitch": 0.6749455397168695,
          "rotation": 0,
          "target": "1-tr"
        },
        {
          "yaw": 1.1035168419189887,
          "pitch": 0.7118245566468957,
          "rotation": 0,
          "target": "9-hinteressraumecke"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-hinteressraumecke",
      "name": "HinteressraumEcke",
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
          "yaw": 1.101679478087565,
          "pitch": 0.5762804876785985,
          "rotation": 0,
          "target": "8-hinteressraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-20260212_215619_015",
      "name": "20260212_215619_015",
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
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
