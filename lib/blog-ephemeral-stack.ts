import { DestroyMeStack, DestroyMeStackProps } from '@aws-community/ephemeral';
import { Construct } from 'constructs';

export class BlogEphemeralStack extends DestroyMeStack {
  constructor(scope: Construct, id: string, props: DestroyMeStackProps) {
    super(scope, id, props);
  }
}
