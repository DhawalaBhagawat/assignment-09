import json

def lambda_handler(event, context):
    # TODO implement
    message = event['queryStringParameters']['keyword']
    sendMessage = 'Dhawala says '+message

    return {
        'statusCode': 200,
        'body': json.dumps(sendMessage)
    }
