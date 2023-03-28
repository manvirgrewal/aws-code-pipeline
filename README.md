# CDK CI/CD Demo aws-code-pipeline

AWS auto pulled from github and started the build process as expected:

CloudFormation:
>prod-LambdaStack
>
>CREATE_COMPLETE	-2023-03-28 01:14:46 UTC-0700	-
>
>test-LambdaStack
>
>CREATE_COMPLETE	-2023-03-28 01:11:34 UTC-0700	-
>
>AwsCodePipelineStack
>
>UPDATE_COMPLETE	-2023-03-28 00:31:20 UTC-0700

CodePipeline:
> Source, Build, UpdatePipeline, Assets: Succeeded
> 
> test lambda stack: succeeded
> 
> manually approval -> approved -> prod test lambda stack also succeeded

Lambda:
> Function Name,                                 Package Type,  Runtime,       Last Modified  
>  
> prod-LambdaStack-LambdaFunctionBF21E41F-NIkwaW9o9QP2	-	Zip	Node.js 18.x	- 6 minutes ago
> 
> test-LambdaStack-LambdaFunctionBF21E41F-yBOzD9yiKf6A	-	Zip	Node.js 18.x	- 9 minutes ago
