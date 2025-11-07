const cluster = new eks.Cluster(this, 'EKSCluster', {
  version: eks.KubernetesVersion.V1_28,
  defaultCapacity: 2,
  vpc: myVpc,
});
