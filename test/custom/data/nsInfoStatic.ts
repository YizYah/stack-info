import {NsInfo} from "magicalstrings";

export const nsInfo: NsInfo = {
  "userClass": "user",
  "starter": "n/a",
  "codeName": "MyApp",
  "template": {
    "dir": "/home/yisroel/packages/export-server-all/export-server/src/custom/commands/../../node_modules/@nostackapp/exporter",
    "name": "exporter",
    "version": "0"
  },
  "general": {
    "units": [
      {
        "unit": "appSpec",
        "role": "customer",
        "queryString": "  appSpec (customerId: ID!): [App] @cypher(statement: \"match (customer:Customer {id:$customerId})-[:\\`Assn_customer_to_app_for_e36aa4c6-8029-4969-b1fe-d659bdb9eb42\\`]-(app:App) return app\")",
        "shownTypes": [
          "app",
          "description",
          "infoType",
          "screen",
          "userType"
        ],
        "parentList": [
          {
            "parent": "userType",
            "unit": "appSpec",
            "children": [
              {
                "name": "screen",
                "assn": "Assn_userType_to_screen_for_e36aa4c6-8029-4969-b1fe-d659bdb9eb42",
                "kind": "multiple"
              }
            ],
            "labels": [
              "Type"
            ]
          },
          {
            "parent": "customer",
            "unit": "appSpec",
            "children": [
              {
                "name": "app",
                "assn": "Assn_customer_to_app_for_e36aa4c6-8029-4969-b1fe-d659bdb9eb42",
                "kind": "multiple"
              }
            ],
            "labels": [
              "UserClass",
              "Type"
            ]
          },
          {
            "parent": "app",
            "unit": "appSpec",
            "children": [
              {
                "name": "userType",
                "assn": "Assn_app_to_userType_for_e36aa4c6-8029-4969-b1fe-d659bdb9eb42",
                "kind": "multiple"
              },
              {
                "name": "description",
                "assn": "Assn_app_to_description_for_e36aa4c6-8029-4969-b1fe-d659bdb9eb42",
                "kind": "multiple"
              }
            ],
            "labels": [
              "Type"
            ]
          },
          {
            "parent": "screen",
            "unit": "appSpec",
            "children": [
              {
                "name": "infoType",
                "assn": "Assn_screen_to_infoType_for_e36aa4c6-8029-4969-b1fe-d659bdb9eb42",
                "kind": "multiple"
              }
            ],
            "labels": [
              "Type"
            ]
          }
        ],
        "root": "customer"
      },
      {
        "unit": "parent",
        "role": "customer",
        "queryString": "  parent: [InfoType] @cypher(statement: \"match (infoType:InfoType) return infoType\")",
        "shownTypes": [
          "infoType",
          "screen"
        ],
        "parentList": [
          {
            "parent": "infoType",
            "unit": "parent",
            "children": [
              {
                "name": "screen",
                "assn": "Assn_infoType_to_screen_for_2bb38a1e-6802-4aa6-8c23-2ae8a7f1fe08",
                "kind": "viewable"
              }
            ],
            "labels": [
              "Type"
            ]
          }
        ],
        "root": "infoType"
      }
    ],
    "types": [
      {
        "singular": "app",
        "capitalized": "App",
        "children": [
          {
            "name": "userType",
            "fieldName": "appSpecUserTypes",
            "relationDirective": "@relation(name: \"Assn_app_to_userType_for_e36aa4c6-8029-4969-b1fe-d659bdb9eb42\", direction: OUT)"
          },
          {
            "name": "description",
            "fieldName": "appSpecDescriptions",
            "relationDirective": "@relation(name: \"Assn_app_to_description_for_e36aa4c6-8029-4969-b1fe-d659bdb9eb42\", direction: OUT)"
          }
        ]
      },
      {
        "singular": "customer",
        "capitalized": "Customer",
        "children": [
          {
            "name": "app",
            "fieldName": "apps",
            "relationDirective": "@relation(name: \"Assn_customer_to_app_for_e36aa4c6-8029-4969-b1fe-d659bdb9eb42\", direction: OUT)"
          }
        ]
      },
      {
        "singular": "description",
        "capitalized": "Description",
        "children": []
      },
      {
        "singular": "infoType",
        "capitalized": "InfoType",
        "children": [
          {
            "name": "screen",
            "fieldName": "screens",
            "relationDirective": "@relation(name: \"Assn_infoType_to_screen_for_2bb38a1e-6802-4aa6-8c23-2ae8a7f1fe08\", direction: OUT)"
          }
        ]
      },
      {
        "singular": "screen",
        "capitalized": "Screen",
        "children": [
          {
            "name": "infoType",
            "fieldName": "infoTypes",
            "relationDirective": "@relation(name: \"Assn_screen_to_infoType_for_e36aa4c6-8029-4969-b1fe-d659bdb9eb42\", direction: OUT)"
          }
        ]
      },
      {
        "singular": "userType",
        "capitalized": "UserType",
        "children": [
          {
            "name": "screen",
            "fieldName": "screens",
            "relationDirective": "@relation(name: \"Assn_userType_to_screen_for_e36aa4c6-8029-4969-b1fe-d659bdb9eb42\", direction: OUT)"
          }
        ]
      }
    ],
    "roles": [
      {
        "singular": "Moderator",
        "capitalized": "Moderator"
      },
      {
        "singular": "customer",
        "capitalized": "Customer"
      }
    ],
    "stackInfo": {
      "stackId": "us-east-1_IDHU1YQ1O",
      "aws": {
        "region": "us-east-1",
        "access": "AblahQ",
        "secret": "blah"
      },
      "cognito": {
        "client": "3432432",
        "pool": "us-westFoo209234uusg"
      },
      "lambda": "us-glelasf33lkl123243",
      "uri": "osc6oeg32a.execute-api.us-east-1.amazonaws.com"
    }
  },
  "units": {
    "appSpec": {
      "userClass": "customer",
      "hierarchy": [
        {
          "constrain#customer": [
            {
              "create#app": [
                {
                  "create#userType": [
                    {
                      "create#screen": [
                        "create#infoType"
                      ]
                    }
                  ]
                },
                "create#description"
              ]
            }
          ]
        }
      ]
    },
    "selectable#parent__infoType": {
      "userClass": "customer",
      "hierarchy": [
        {
          "use#infoType__appSpec": [
              "use#screen__appSpec": null
d
      }
    ]
  }
},
  "topUnits": [],
  "static": {
    "userType": {
      "Customer": {
        "slug": "Customer"
      },
      "Seller": {
        "slug": "Seller"
      }
    }
  }
}
