#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DestroyerStack } from '@aws-community/ephemeral';
import { BlogEphemeralStack } from '../lib/blog-ephemeral-stack';


const app = new cdk.App();

new DestroyerStack(app, 'DestroyerStack');

new BlogEphemeralStack(app, 'EphemeralStack', {
  destroyMeEnable: true,
  destroyMeDuration: cdk.Duration.minutes(3),
});