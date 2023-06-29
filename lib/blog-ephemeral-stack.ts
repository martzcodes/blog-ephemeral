import { DestroyMeStack, DestroyMeStackProps } from '@aws-community/ephemeral';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class BlogEphemeralStack extends DestroyMeStack {
  constructor(scope: Construct, id: string, props: DestroyMeStackProps) {
    super(scope, id, props);
  }
}
