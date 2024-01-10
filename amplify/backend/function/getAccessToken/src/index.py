import json
import requests

def handler(event, context):
    print('received event:')
    print(event)
  
    # get event['whatever the key name for code is']
    code = event['code']
    userID = event['userID']

    client_id = event['client_id']
    client_secret = event['client_secret']

    # call obtain api
    url = "https://connect.squareup.com/oauth2/token"

    headers = {
        'Square-Version': '2023-12-13',
        'Content-Type': 'application/json'
    }

    data = {
        'code': code,
        'grant_type': 'authorization_code',
        'client_id': client_id,
        'client_secret': client_secret
    }
    response = requests.post(url, headers=headers, json=data)

    # store result in userToken by accessing event['userID] and storing it in that object
    print(response)
  
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps('Success!')
    }