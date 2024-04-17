// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2l3cc2ora7di5ucdc20gmhimfn",     // CognitoClientID
  "api_base_url": "https://w7dbi02czd.execute-api.eu-north-1.amazonaws.com/{StageNameParam}",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo2-lambda-refarch-webapp.auth.eu-north-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1lfzx10m4cy0l.amplifyapp.com"                                      // AmplifyURL
};

export default config;


// Key                 CognitoClientID                                                                                                                                                                 
// Description         The Cognito UserPool Client ID                                                                                                                                                  
// Value               2l3cc2ora7di5ucdc20gmhimfn                                                                                                                                                      

// Key                 CognitoDomainName                                                                                                                                                               
// Description         The Cognito Hosted UI Domain Name                                                                                                                                               
// Value               mytodoappdemo2-lambda-refarch-webapp.auth.eu-north-1.amazoncognito.com                                                                                                          

// Key                 AmplifyURL                                                                                                                                                                      
// Description         -                                                                                                                                                                               
// Value               https://master.d1lfzx10m4cy0l.amplifyapp.com                                                                                                                                    

// Key                 CognitoID                                                                                                                                                                       
// Description         The Cognito UserPool ID                                                                                                                                                         
// Value               eu-north-1_lPAT0DGuX                                                                                                                                                            

// Key                 TodoFunctionApi                                                                                                                                                                 
// Description         API Gateway endpoint URL for Prod stage                                                                                                                                         
// Value               https://w7dbi02czd.execute-api.eu-north-1.amazonaws.com/{StageNameParam}  