#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkDemoStack } from '../lib/cdk-demo-stack';

const targetEnv = process.env.SYSTEM_ENV ? process.env.SYSTEM_ENV : 'dev';
const accountID = targetEnv == 'dev' ? '080414913409' : '080414913409'

const app = new cdk.App();
new CdkDemoStack(app, `CdkDemoStack-${targetEnv}`, {
  env: { account: `${accountID}`, region: 'ap-northeast-1' },

});