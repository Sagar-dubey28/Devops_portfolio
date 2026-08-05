export const SOCIALS = {
  github: 'https://github.com/Sagar-dubey28',
  linkedin: 'https://www.linkedin.com/in/sagar-dubey1900/',
  email: 'mailto:connect.sagardubey@gmail.com',
  resume: '/Sagar-Dubey-DevOps-Resume.pdf',
}

// Floating tech badges around the profile. `color` is the brand tint applied
// to the masked SVG icon stored in /public/logos.
export const ORBIT_BADGES = [
  { name: 'AWS', logo: '/logos/aws.svg', color: 'oklch(0.78 0.16 60)' },
  { name: 'Kubernetes', logo: '/logos/kubernetes.svg', color: 'oklch(0.7 0.16 255)' },
  { name: 'Docker', logo: '/logos/docker.svg', color: 'oklch(0.72 0.15 240)' },
  { name: 'Terraform', logo: '/logos/terraform.svg', color: 'oklch(0.68 0.19 285)' },
  { name: 'Jenkins', logo: '/logos/jenkins.svg', color: 'oklch(0.7 0.13 25)' },
  { name: 'ArgoCD', logo: '/logos/argo.svg', color: 'oklch(0.75 0.16 40)' },
  { name: 'SonarQube', logo: '/logos/sonarqube.svg', color: 'oklch(0.72 0.13 220)' },
  { name: 'Helm', logo: '/logos/helm.svg', color: 'oklch(0.72 0.14 210)' },
  { name: 'Prometheus', logo: '/logos/prometheus.svg', color: 'oklch(0.72 0.17 45)' },
]

export const METRICS = [
  { value: '6+', label: 'Months Hands-on Experience' },
  { value: '2', label: 'Production-Grade EKS Projects' },
  { value: '10+', label: 'Multi-Stage CI/CD Pipelines' },
]

export const EXPERIENCE = {
  role: 'DevOps Engineer Intern',
  company: 'HisanLabs Private Limited',
  period: 'Jan 2026 – June 2026',
  highlights: [
    'Architected zero-downtime Jenkins pipelines triggered via GitHub Webhooks for Java Spring Boot, Node.js and Python FastAPI applications.',
    'Authored modular Terraform IaC to provision enterprise-grade AWS infrastructure: VPCs, subnets, gateways, security groups, EC2, EBS and EFS.',
    'Engineered EKS deployment workflows with Kubernetes manifests and Helm charts, applying Rolling Updates and Blue/Green strategies.',
    'Embedded shift-left DevSecOps using SonarQube and Trivy, plus CloudWatch observability dashboards for proactive incident response.',
  ],
}

export const SKILL_GROUPS = [
  {
    title: 'Cloud Platforms',
    items: [
      'AWS EC2', 'VPC', 'IAM', 'S3', 'EBS', 'EFS', 'ASG', 'ALB', 'Route 53',
      'CloudFront', 'ACM', 'RDS', 'Lambda', 'CloudWatch', 'ECR', 'EKS',
      'AWS CLI', 'Azure (Fundamentals)', 'GCP (Fundamentals)',
    ],
  },
  {
    title: 'Containerization & Orchestration',
    items: [
      'Docker', 'Dockerfile', 'Compose', 'Networking', 'Volumes',
      'Kubernetes', 'EKS', 'Helm', 'Ingress', 'Rolling Updates', 'Blue/Green',
    ],
  },
  {
    title: 'CI/CD & GitOps',
    items: ['Jenkins', 'GitHub Actions', 'ArgoCD'],
  },
  {
    title: 'Infrastructure as Code & Security',
    items: ['Terraform', 'Ansible', 'SonarQube', 'Trivy'],
  },
  {
    title: 'Monitoring & Observability',
    items: ['AWS CloudWatch', 'Prometheus', 'Grafana', 'Datadog'],
  },
  {
    title: 'Version Control & Languages',
    items: ['Git', 'GitHub', 'Shell Scripting (Bash)', 'Python'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'MongoDB'],
  },
]

export const PROJECTS = [
  {
    title: 'End-to-End Microservices CI/CD Platform on AWS EKS',
    description:
      'A polyglot microservices platform (e-commerce UI, user, cart, order and payment services) with fully automated, secure GitOps delivery to a multi-AZ EKS cluster.',
    tags: [
      'Java', 'Node.js', 'Python', 'Go', 'React', 'AWS EKS', 'Terraform',
      'Jenkins', 'ArgoCD', 'SonarQube', 'Trivy', 'Helm',
    ],
    link: 'https://github.com/Sagar-dubey28/End-to-End-Microservices-CI-CD-Platform-on-AWS-EKS',
    linkLabel: 'View Source Code',
    available: true,
  },
  {
    title: 'EduBlitz Medical B2B ERP System',
    description:
      'A production-grade medical ERP with three decoupled Spring Boot microservices and a React SPA on S3 + CloudFront, secured with JWT and deployed to EKS via ALB Ingress.',
    tags: [
      'Java Spring Boot 3.x', 'React 18', 'Vite', 'MongoDB', 'AWS EKS',
      'Terraform', 'Helm', 'JWT', 'OpenAPI',
    ],
    link: 'https://github.com/Sagar-dubey28/Medical-B2B-ERP-System',
    linkLabel: 'View Source Code',
    available: true,
  },
]
