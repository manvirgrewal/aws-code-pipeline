import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { ManualApprovalStep } from 'aws-cdk-lib/pipelines';
//import { MyPipelineAppStage } from './stage';

export class AwsCodePipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'Pipeline', {
      pipelineName: 'testPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('manvirgrewal/aws-code-pipeline', 'main'),
        commands: ['npm ci', 
                   'npm run build', 
                   'npx cdk synth']
      }),
    })
  }

}