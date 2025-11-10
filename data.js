var APP_DATA = {
  "scenes": [
    {
      "id": "0-receptoin",
      "name": "receptoin",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.5762536489742152,
        "pitch": -0.02671259141818716,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.8749695400614117,
          "pitch": -0.06983636039214147,
          "rotation": 5.497787143782138,
          "target": "1-medicine-rack"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-medicine-rack",
      "name": "medicine rack",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.5914834725083402,
        "pitch": -0.07548915460431793,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.505249991648288,
          "pitch": 0.14912405818813923,
          "rotation": 7.0685834705770345,
          "target": "0-receptoin"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "medical shop",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
