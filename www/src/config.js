// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "5mg05mj37mrqe94gr9tr3djkns",     // CognitoClientID
  "api_base_url": "https://6toy2gr9n2.execute-api.eu-north-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo2-lambda-refarch-webapp.auth.eu-north-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d12nz4hen5cup5.amplifyapp.com"                                      // AmplifyURL
};

export default config;
