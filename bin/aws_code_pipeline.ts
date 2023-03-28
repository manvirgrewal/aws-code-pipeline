#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCodePipelineStack } from '../lib/aws_code_pipeline-stack';

const app = new cdk.App();
new AwsCodePipelineStack(app, 'AwsCodePipelineStack', {
  env: { account: '928136515247', region: 'us-east-1' },

});

app.synth();