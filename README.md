# AWS EKS Infrastructure with AWS CDK (TypeScript)

This project provisions a minimal **Amazon EKS** cluster using **AWS CDK (TypeScript)** with reusable constructs for networking, IAM roles, and worker node groups.

Automated environment setup (VPC, EKS, IAM roles, ALB) using AWS CDK in TypeScript.
• Reduced provisioning time by 60%
• Improved infrastructure consistency and rollback confidence

## What it does
- Creates a VPC with public and private subnets  
- Deploys an EKS cluster (v1.28)  
- Attaches managed node groups  
- Adds IAM roles and cluster admin mappings  
- Outputs `kubectl` configuration for immediate access

## Tech Stack
**AWS CDK (TypeScript)** · **EKS** · **CloudFormation** · **IAM** · **VPC**

## Code Example
```typescript
const cluster = new eks.Cluster(this, 'EKSCluster', {
  version: eks.KubernetesVersion.V1_28,
  defaultCapacity: 2,
  vpc,
});
