export function getSuggestions(input: string) {
    return ({
        "suggestions": [
          {
            "name": "Chicago",
            "mapbox_id": "dXJuOm1ieHBsYzpBNGxJN0E",
            "feature_type": "place",
            "place_formatted": "Illinois, United States",
            "context": {
              "country": {
                "id": "dXJuOm1ieHBsYzpJdXc",
                "name": "United States",
                "country_code": "US",
                "country_code_alpha_3": "USA"
              },
              "region": {
                "id": "dXJuOm1ieHBsYzpST3c",
                "name": "Illinois",
                "region_code": "IL",
                "region_code_full": "US-IL"
              },
              "district": {"id": "dXJuOm1ieHBsYzpUc2Jz", "name": "Cook County"}
            },
            "language": "en",
            "maki": "marker",
            "metadata": {},
            "distance": 1150000
          },
          {
            "name": "Chicago Hair",
            "mapbox_id": "dXJuOm1ieHJldDo2cEFSNE5nOThYTThBNEQwcHlPQ0UyZUdBaVh4NzZCZ2xtOGVVNG02QWQ0MWtrbVRQRmdEQkFZS3RtWnk3SXZCWlZYcVJIRXRTUnZVMnYwS1Z0U045Rk1XaFdObXE5cUp4WDA3WXhHaXNzdk9fYlNXWHhpRm9HR3lWci1tNEVydnNiY0I4ZmJBel9zcjNLZnVCdkFDRUxzdGdSNUxabjI0NkJGcUxWekJPWFd2cjZ0M3RnZFdGTTEwcURUYzhBLU00TWNvQnljc3RpbFJHVlloMmpweE1GQk9vdUdrNFhiWFNzMmdyRExOb1dFaHR6anAyMjVVX083Y1BSM1lVMWxKMGpuc3BSODREc2J1bUtMUDUwSzI0eVZyRjdQb3VIbEJJZkhUc1gyZ0dPYk9lc3N1OHdrR3BjTDZIeW96S1lsd25QOC15aFZLbnVYVjJDYnF1MktZZnQ1am5yZUN5TFNHLUE4NlJBZXh2ckgxSl9YakFWcGxOV2dtdWNNT0MxcUtZUVROUlZLVlFaRElzRUFKeGNvb2xPVks1Y3RzQVlId2tMWUFUT0xFY00xSDNkdTZ4eUs1VlQ2Tk5pVENQVVU0QjBVSHl6SGs3SVFRUlE2aHBnSVd1Y0tjcFZ5Z2drZHNhakpkTVd2WWpjX3hKOTVQUDBkUEJpNW50TS1ZZHhrLTFFRlVmdU5YWGM0Yl9OTWhGREU1WWF6YW12dzBzQUJCWmNiUVVoTXNYa0gzc3pYY1BJZmpXbmdCT3M0WkRUc0dVel91TVpLRzRjT0xlMTRHRE1vdWNfLWpwajZudXJNSEczbnJ2T0JscURJc1Q4al96QUMwZENYZWF3Z1FNeEdHbHo1S1V0UkhJZmhCT25LQm9yUWFWVnpxcVNNSFhZS3YwV3oyREgzV1hqQ0h5VWhheExNdFdFbVkxczlFSWJFN1gzenBSbVB1UHgtcjJpeno2QV9nM0N5X3o4NnBDNGx2Z3RfaVNkbzZzbHpSckZhbTcxSWtYeS1sZ0RCVE1jeEhXQXN6ZVY4LUt1NDlBQ2dwcmlCNm5MblVPbVFGNHdLU3pqTndZd0tJSGZvMGpoX0t6UThwUmZ0VjdNZ2RQNUxmUU9fU1ZpUktFbnVlcnF2SXp2Mm5DdndkQTdES0JKaHgzTDR3YUdUTGkzdmxJWFRrUHRhRzRyZGc2dEl6YndhbjN6X0g3ZGZGUXpaX0ZrRThjY3g1dnFoazRPYVRjV09oRTBfal9CX3lQVTUtXy1JMks0bkVoaVRld2FYOGp2dXNaNUFnX2F2NDh2RnYwWVVvM3hqVG9lVzNCaDBYLUNDdVNnVVJyT05FZWtYV1BJQ3dHLUdOeEZaWVRSdjJGc2V2MmpZN3lCbm9nQUJVMGNHUnlOeUlVY0pxSzJaTXh6Zml1VFZIaUxPcE9pbzdTOXBESkNlUWR3ZGtYNGhDNnVjVllEcldpa2JhakdNRTZZMFhhTlZuV3hCRmMySWNiQ2Vodkt3SmJGR3ZnVmF1YVhzT1ltTUctZVZJaDEtcVY2OFRmaGl0bkRTS1Q4bm9vMEZySnBhZExYVDV1bkF6c3N6NkFRR1N2RHVMM2pJY28wN1FKdG9ja2oxcVRLb05VQmZZUW5hSUctV2stTWVWQXN6bDg4Y0M2RjBiZWNrdk1ZT0cwX0VGWkdIZXNQQW9jRVZXT0w5X3FvaEVZLVpSbWM4VV9YbE5LR0ZEREh5MVo5a3EyUkRBQzRCS044OXYxTlNxOVBlVkNKUGhGMnBDSkdMdnBpRzk5TUg1Z2Z5Yk5HWk0teVhhYl9LS0ljT2JRYUZRT05xRF9lOFlGN3V3cFRzVFR4VXFMXzFrczdYQl9KTURXbXdaR1ZvOVdfSlJpMm1oM1VnVjQtZklxdldsR0RDdTVSdDBHenE0NGtIQnd3UkpFMkF4eFNmNThEZHVBRzc4NUhRZDBaZnp1LW9seGhXd283Z2ZmbktiSlZ6enhpaFVEdlUtOWkyemVXMS1jVVVUSl8zd3JRZnIwYnl5MURsMnp3X2p4NEJ4cGFERU42TFN5TkxBSnRveldTVm13OVB0Z1hpQ21Ya0l2c0NheERMcFpva3o0TjM5X21oTFR5X25ZVXpQZFNzVEw5RUJqdWw1TmppSWlqcDFSU3I0dEY4MWp2OWI5TnRGcnRxeUZEbG0xMVZ4VlhWYUg4YXFNYnlMbzJ2TDBoUzdlVXBqeHZpOGVhRmg5a1BMaXltZHhCek5mU3hTOF9fLVVMbGFSY0pYR0FkcTZRSDJCbUY1dlphNHQ0OGhGVGEwVEdJY0poaU9DVFFVVE0wNlc4aDlUZkRIaGM2Rzg1MTVkZW1QZUdlNUZkNVB3TmNoSVpNWGJoXzlyNUhlSXlyQ2hIVDRnS21aOGZDNkwxRnZfQkxpZ3k5NzR4XzA1Qk52RzhYVVZhUVdWR01zTVFiSjhQLU5WcEpFRWxRRExYNHBORklLQ3p5aFF4U3hQcG04b0p2RkdFZmgyVTE4RjZnS1ZKczlSQkVzRE05ZDg3M2gwN2hKakltX0xScW83OFFZSlN4RnZGR2RiZzY1TFU1ZzB0TE9ocUVrRDc1VFhZUmJsRUNvOW9kRHdRYWxiRXhQUlJtUlM0cGZwR3pVZlhsemlGWkxLVzI1YUJjMU1fLXhQcnRVN1F5SkloV200QVVQSkd0eXpPUUZ1N0F6NEVqb3VPZjRvUHJDZWVuTDZRajFKYjVHd2dyU25kWGVhUnctdjNJT2hNYTA0UmkzTEJlLTBIZVl4aGZXOEhIaDJpd0dQZTY4OUotSHlMVEVSSGhxS0o3Y1RBVFJub0R0NzRiWXhPbERTNnZuak1DV3FieVU2TkdENGxVTXJrWW4zbGRHcGpZZ011WERBaVJSOEYxd2VibHVoTXR1RDVXRTI2cmlFaVc3d0Fjb2stQXZLZHZqRFNUYkt1YUFTYUFOREU4UThBY1ltalFyOENLWVpROGN2THlFTUxRdjQ0XzhKMWFTbkxvbHpUOWVDMC1fNWg1S1NrNzd1NjJoN19EQnNtcWF0ekhaQkFqTmlmMXpWX0tHb05YaFN4enBhQnItY0VvaUZSdzFjU3d3RFF2T2xlLTRmYU9mTjBhTmF2Q2ktWFNJbzlIT2VodDlSMFM0cFBIWHI4cTZKc2pBQkZXRlUyLWZJMmVCdUxnR04xTi1HVEU9",
            "feature_type": "brand",
            "place_formatted": "Brand",
            "context": {},
            "language": "en",
            "brand": ["Chicago Hair"],
            "external_ids": {"federated": "brand.chicago_hair"}
          },
          {
            "name": "Chicago Musical",
            "name_preferred": "Chicago The Musical",
            "mapbox_id": "dXJuOm1ieHBvaTpjNTE0Y2Y3Ny03MjQ2LTQyOGYtYjI0Ny0xZWNmNDVjYTE5MDE",
            "feature_type": "poi",
            "address": "219 W 49th St",
            "full_address": "219 W 49th St, New York, New York 10019, United States",
            "place_formatted": "New York, New York 10019, United States",
            "context": {
              "country": {
                "name": "United States",
                "country_code": "US",
                "country_code_alpha_3": "USA"
              },
              "region": {
                "name": "New York",
                "region_code": "NY",
                "region_code_full": "US-NY"
              },
              "postcode": {"id": "dXJuOm1ieHBsYzpBWG1PN0E", "name": "10019"},
              "place": {"id": "dXJuOm1ieHBsYzpEZTVJN0E", "name": "New York City"},
              "locality": {"id": "dXJuOm1ieHBsYzpGREtLN0E", "name": "Manhattan"},
              "neighborhood": {
                "id": "dXJuOm1ieHBsYzpKa2JzN0E",
                "name": "Theater District"
              },
              "address": {
                "name": "219 W 49th St",
                "address_number": "219",
                "street_name": "w 49th st"
              },
              "street": {"name": "w 49th st"}
            },
            "language": "en",
            "maki": "cinema",
            "poi_category": ["entertainment", "nightlife", "theater"],
            "poi_category_ids": ["entertainment", "nightlife", "theatre"],
            "external_ids": {"dataplor": "53847240-be6a-4f99-bead-c98c0ddd9466"},
            "metadata": {},
            "distance": 2400,
            "operational_status": "active"
          },
          {
            "name": "Big Al's Chicago Style Pizza",
            "mapbox_id": "dXJuOm1ieHBvaS1vc206bjkxMjA4MjE4OTg",
            "feature_type": "poi",
            "address": "9 Thames Street",
            "full_address": "9 Thames Street, 10006, New York, United States, America, United States of America, US, USA",
            "place_formatted": "10006, New York, United States, America, United States of America, US, USA",
            "context": {
              "country": {"name": "US"},
              "postcode": {"name": "10006"},
              "address": {
                "name": "9 Thames Street",
                "address_number": "9",
                "street_name": "thames street"
              },
              "street": {"name": "thames street"}
            },
            "language": "en",
            "maki": "restaurant",
            "poi_category": [
              "Food",
              "Food and Drink",
              "Restaurant, Restaurants, Eatery, Eateries, Diner, Diners, Food, Foods, Bistro, Bistros, Eat, Meal"
            ],
            "poi_category_ids": ["food", "food_and_drink", "restaurant"],
            "external_ids": {"id_osm": "n9120821898"},
            "distance": 3900
          },
          {
            "name": "Uno Chicago Grill",
            "mapbox_id": "dXJuOm1ieHBvaS1vc206bjI3NDU1NTgwOTk",
            "feature_type": "poi",
            "address": "432 Columbus Avenue",
            "full_address": "432 Columbus Avenue, 10024, New York, United States of America",
            "place_formatted": "10024, New York, United States of America",
            "context": {
              "country": {"name": "US"},
              "postcode": {"name": "10024"},
              "address": {
                "name": "432 Columbus Avenue",
                "address_number": "432",
                "street_name": "columbus avenue"
              },
              "street": {"name": "columbus avenue"}
            },
            "language": "en",
            "maki": "restaurant",
            "poi_category": [
              "Food",
              "Food and Drink",
              "Restaurant, Restaurants, Eatery, Eateries, Diner, Diners, Food, Foods, Bistro, Bistros, Eat, Meal"
            ],
            "poi_category_ids": ["food", "food_and_drink", "restaurant"],
            "external_ids": {"id_osm": "n2745558099"},
            "distance": 5000
          }
        ],
        "attribution": "© 2025 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service. (https://www.mapbox.com/about/maps/)",
        "response_id": "dvCsu_xXi66rMTotPSVuv-BpZZ9hSm0IUTDrnXFEl9dA61bLovxIVyJidPFN908Ds11CDhD-UCHjueplj53MK3RCKZ15Ao0vP-oN",
        "url": "https://api.mapbox.com/search/searchbox/v1/suggest?q=chicago&access_token=pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY200aW5xbzh3MDRpNjJpcHpoazY5MzFpdCJ9.lHbcBn_S_e7vw-go05RH6w&language=en&session_token=0101d1cf-2e9e-49a1-894b-b2964800d298&proximity=-73.990593%2C40.740121"
      })
}



export const retrieveDetails = (id: string) => {
    return (
        {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "geometry": {
                  "coordinates": [
                    -74.45301789,
                    40.49443474
                  ],
                  "type": "Point"
                },
                "properties": {
                  "name": "Chicago's Southside Hair Cutters",
                  "mapbox_id": "dXJuOm1ieHBvaTphOWQ1YjYzNC00YTgyLTQyODktYmQxMC03M2NjODJlZTEwZjA",
                  "feature_type": "poi",
                  "address": "222 Somerset St",
                  "full_address": "222 Somerset St, New Brunswick, New Jersey 08901, United States",
                  "place_formatted": "New Brunswick, New Jersey 08901, United States",
                  "context": {
                    "country": {
                      "id": "",
                      "name": "United States",
                      "country_code": "US",
                      "country_code_alpha_3": "USA"
                    },
                    "region": {
                      "id": "",
                      "name": "New Jersey",
                      "region_code": "NJ",
                      "region_code_full": "US-NJ"
                    },
                    "postcode": {
                      "id": "dXJuOm1ieHBsYzpBWGFPN0E",
                      "name": "08901"
                    },
                    "place": {
                      "id": "dXJuOm1ieHBsYzpEYTdvN0E",
                      "name": "New Brunswick"
                    },
                    "address": {
                      "id": "",
                      "name": "222 Somerset St",
                      "address_number": "222",
                      "street_name": "somerset st"
                    },
                    "street": {
                      "id": "",
                      "name": "somerset st"
                    }
                  },
                  "coordinates": {
                    "latitude": 40.49443474,
                    "longitude": -74.45301789,
                    "routable_points": [
                      {
                        "name": "POI",
                        "latitude": 40.49451325969505,
                        "longitude": -74.45305727649219
                      }
                    ]
                  },
                  "language": "en",
                  "maki": "marker",
                  "poi_category": [
                    "barber",
                    "services"
                  ],
                  "poi_category_ids": [
                    "hairdresser",
                    "services"
                  ],
                  "brand": [
                    "Chicago Hair"
                  ],
                  "brand_id": [
                    "chicago_hair"
                  ],
                  "external_ids": { },
                  "metadata": { },
                  "operational_status": "active"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "coordinates": [
                    -87.60543283,
                    41.75385732
                  ],
                  "type": "Point"
                },
                "properties": {
                  "name": "Chicago Natural Hair Gallery",
                  "mapbox_id": "dXJuOm1ieHBvaTo5ZDQxNGY5Mi05ODBlLTRkZmUtOWQxMC03MzUxZWQ1M2M1Mzg",
                  "feature_type": "poi",
                  "address": "7732 S Cottage Grove Ave",
                  "full_address": "7732 S Cottage Grove Ave, Chicago, Illinois 60619, United States",
                  "place_formatted": "Chicago, Illinois 60619, United States",
                  "context": {
                    "country": {
                      "id": "",
                      "name": "United States",
                      "country_code": "US",
                      "country_code_alpha_3": "USA"
                    },
                    "region": {
                      "id": "",
                      "name": "Illinois",
                      "region_code": "IL",
                      "region_code_full": "US-IL"
                    },
                    "postcode": {
                      "id": "dXJuOm1ieHBsYzpER2V1N0E",
                      "name": "60619"
                    },
                    "place": {
                      "id": "dXJuOm1ieHBsYzpBNGxJN0E",
                      "name": "Chicago"
                    },
                    "neighborhood": {
                      "id": "dXJuOm1ieHBsYzpEd3RNN0E",
                      "name": "Grand Crossing"
                    },
                    "address": {
                      "id": "",
                      "name": "7732 S Cottage Grove Ave",
                      "address_number": "7732",
                      "street_name": "s cottage grove ave"
                    },
                    "street": {
                      "id": "",
                      "name": "s cottage grove ave"
                    }
                  },
                  "coordinates": {
                    "latitude": 41.75385732,
                    "longitude": -87.60543283,
                    "routable_points": [
                      {
                        "name": "POI",
                        "latitude": 41.75386127856488,
                        "longitude": -87.60527132055306
                      }
                    ]
                  },
                  "language": "en",
                  "maki": "marker",
                  "poi_category": [
                    "barber",
                    "services"
                  ],
                  "poi_category_ids": [
                    "hairdresser",
                    "services"
                  ],
                  "brand": [
                    "Chicago Hair"
                  ],
                  "brand_id": [
                    "chicago_hair"
                  ],
                  "external_ids": { },
                  "metadata": {
                    "wheelchair_accessible": true
                  },
                  "operational_status": "active"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "coordinates": [
                    -87.6193009,
                    41.89333279
                  ],
                  "type": "Point"
                },
                "properties": {
                  "name": "One 100 Chicago Nail Hair Lash",
                  "mapbox_id": "dXJuOm1ieHBvaTo2ODlmZTdmZS02MmYxLTRmOGMtYTlmMy0zMzQ4ODQ5ZjcyYTc",
                  "feature_type": "poi",
                  "address": "323 E Ontario St",
                  "full_address": "323 E Ontario St, Chicago, Illinois 60611, United States",
                  "place_formatted": "Chicago, Illinois 60611, United States",
                  "context": {
                    "country": {
                      "id": "",
                      "name": "United States",
                      "country_code": "US",
                      "country_code_alpha_3": "USA"
                    },
                    "region": {
                      "id": "",
                      "name": "Illinois",
                      "region_code": "IL",
                      "region_code_full": "US-IL"
                    },
                    "postcode": {
                      "id": "dXJuOm1ieHBsYzpHRk51N0E",
                      "name": "60611"
                    },
                    "place": {
                      "id": "dXJuOm1ieHBsYzpBNGxJN0E",
                      "name": "Chicago"
                    },
                    "neighborhood": {
                      "id": "dXJuOm1ieHBsYzpKUnBzN0E",
                      "name": "Streeterville"
                    },
                    "address": {
                      "id": "",
                      "name": "323 E Ontario St",
                      "address_number": "323",
                      "street_name": "e ontario st"
                    },
                    "street": {
                      "id": "",
                      "name": "e ontario st"
                    }
                  },
                  "coordinates": {
                    "latitude": 41.89333279,
                    "longitude": -87.6193009,
                    "routable_points": [
                      {
                        "name": "POI",
                        "latitude": 41.893434599699056,
                        "longitude": -87.61930214461735
                      }
                    ]
                  },
                  "language": "en",
                  "maki": "marker",
                  "poi_category": [
                    "cosmetics shop",
                    "nail salon",
                    "salon",
                    "services",
                    "shopping"
                  ],
                  "poi_category_ids": [
                    "beauty_store",
                    "nail_salon",
                    "salon",
                    "services",
                    "shopping"
                  ],
                  "brand": [
                    "Chicago Hair"
                  ],
                  "brand_id": [
                    "chicago_hair"
                  ],
                  "external_ids": { },
                  "metadata": {
                    "wheelchair_accessible": true
                  },
                  "operational_status": "active"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "coordinates": [
                    -87.62210515,
                    41.88641557
                  ],
                  "type": "Point"
                },
                "properties": {
                  "name": "Dr. Yates, MD",
                  "mapbox_id": "dXJuOm1ieHBvaTozYmFlN2M4Yy00YTc0LTQ4NjMtYjIzNi1iN2RlYTY1NDMwMGM",
                  "feature_type": "poi",
                  "address": "213 N Stetson Ave",
                  "full_address": "213 N Stetson Ave, Chicago, Illinois 60601, United States",
                  "place_formatted": "Chicago, Illinois 60601, United States",
                  "context": {
                    "country": {
                      "id": "",
                      "name": "United States",
                      "country_code": "US",
                      "country_code_alpha_3": "USA"
                    },
                    "region": {
                      "id": "",
                      "name": "Illinois",
                      "region_code": "IL",
                      "region_code_full": "US-IL"
                    },
                    "postcode": {
                      "id": "dXJuOm1ieHBsYzpER1Z1N0E",
                      "name": "60601"
                    },
                    "place": {
                      "id": "dXJuOm1ieHBsYzpBNGxJN0E",
                      "name": "Chicago"
                    },
                    "neighborhood": {
                      "id": "dXJuOm1ieHBsYzpGSTZNN0E",
                      "name": "Lakeshore East"
                    },
                    "address": {
                      "id": "",
                      "name": "213 N Stetson Ave",
                      "address_number": "213",
                      "street_name": "n stetson ave"
                    },
                    "street": {
                      "id": "",
                      "name": "n stetson ave"
                    }
                  },
                  "coordinates": {
                    "latitude": 41.88641557,
                    "longitude": -87.62210515,
                    "routable_points": [
                      {
                        "name": "POI",
                        "latitude": 41.886485,
                        "longitude": -87.622113
                      }
                    ]
                  },
                  "language": "en",
                  "maki": "marker",
                  "poi_category": [
                    "barber",
                    "services"
                  ],
                  "poi_category_ids": [
                    "hairdresser",
                    "services"
                  ],
                  "brand": [
                    "Chicago Hair"
                  ],
                  "brand_id": [
                    "chicago_hair"
                  ],
                  "external_ids": { },
                  "metadata": {
                    "wheelchair_accessible": true
                  },
                  "operational_status": "active"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "coordinates": [
                    -87.62402823,
                    41.85167252
                  ],
                  "type": "Point"
                },
                "properties": {
                  "name": "The Hair Closet Chicago",
                  "mapbox_id": "dXJuOm1ieHBvaToyNmY4ZGM1Ni1hZmZjLTQ0ODYtYjRkNy1kZDgwZmI2YzRiM2U",
                  "feature_type": "poi",
                  "address": "2240 S Michigan Ave Museum Of Contemporary Photography",
                  "full_address": "2240 S Michigan Ave Museum Of Contemporary Photography, Chicago, Illinois 60616, United States",
                  "place_formatted": "Chicago, Illinois 60616, United States",
                  "context": {
                    "country": {
                      "id": "",
                      "name": "United States",
                      "country_code": "US",
                      "country_code_alpha_3": "USA"
                    },
                    "region": {
                      "id": "",
                      "name": "Illinois",
                      "region_code": "IL",
                      "region_code_full": "US-IL"
                    },
                    "postcode": {
                      "id": "dXJuOm1ieHBsYzpER2RPN0E",
                      "name": "60616"
                    },
                    "place": {
                      "id": "dXJuOm1ieHBsYzpBNGxJN0E",
                      "name": "Chicago"
                    },
                    "neighborhood": {
                      "id": "dXJuOm1ieHBsYzpGMmNzN0E",
                      "name": "McCormick Square"
                    },
                    "address": {
                      "id": "",
                      "name": "2240 S Michigan Ave Museum Of Contemporary Photography",
                      "address_number": "2240",
                      "street_name": "s michigan ave"
                    },
                    "street": {
                      "id": "",
                      "name": "s michigan ave"
                    }
                  },
                  "coordinates": {
                    "latitude": 41.85167252,
                    "longitude": -87.62402823,
                    "routable_points": [
                      {
                        "name": "POI",
                        "latitude": 41.85167789203155,
                        "longitude": -87.6237796243176
                      }
                    ]
                  },
                  "language": "en",
                  "maki": "marker",
                  "poi_category": [
                    "cosmetics shop",
                    "salon",
                    "services",
                    "shopping"
                  ],
                  "poi_category_ids": [
                    "beauty_store",
                    "salon",
                    "services",
                    "shopping"
                  ],
                  "brand": [
                    "Chicago Hair"
                  ],
                  "brand_id": [
                    "chicago_hair"
                  ],
                  "external_ids": { },
                  "metadata": { },
                  "operational_status": "active"
                }
              }
            ],
            "attribution": "© 2025 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service. (https://www.mapbox.com/about/maps/)"
          }
    )
}