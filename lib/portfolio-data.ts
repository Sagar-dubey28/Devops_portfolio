export const SOCIALS = {
  github: 'https://github.com/Sagar-dubey28',
  linkedin: 'https://www.linkedin.com/in/sagar-dubey1900/',
  email: 'mailto:connect.sagardubey@gmail.com',
  resume: '/Sagar_Dubey_Resume.pdf',
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

export const PROFESSIONAL_SUMMARY =
  "DevOps Engineer with hands-on experience in AWS, Linux, Docker, Kubernetes, Terraform, Jenkins, and Git. Worked on CI/CD pipelines for Java Spring Boot, Node.js, and Python applications, including automated builds, security checks, Docker image creation, and Kubernetes deployments. Experienced in provisioning AWS infrastructure with Terraform and deploying containerized workloads on Amazon EKS using Kubernetes and Helm. Multicloud with DevSecOps tools including SonarQube and Trivy, monitoring with Prometheus, Grafana, and CloudWatch, and automation using Ansible, Python, and Bash. Familiar with Azure and GCP cloud fundamentals."

export const EXPERIENCE = {
  role: 'DevOps Engineer Intern',
  company: 'HisanLabs Private Limited',
  period: 'Jan 2026 – June 2026',
  highlights: [
  "Worked with Git-based development workflows using feature branches, Gitflow, pull requests, merge conflict resolution, and GitHub Webhooks to trigger automated workflows when changes were pushed to repositories.",
  "Created and maintained Jenkins CI/CD jobs for Java Spring Boot, Node.js, and Python FastAPI applications, writing Scripted Pipelines and configuring different job types for build, testing, Docker image creation, security checks, and deployment; managed Jenkins Credentials and reused common pipeline logic through Shared Libraries.",
  "Provisioned AWS infrastructure using Terraform for VPCs, public and private subnets, Internet and NAT Gateways, Security Groups, EC2, EBS, EFS, and IAM roles and policies; configured Route 53, ACM, Application Load Balancers, and Auto Scaling Groups for DNS, TLS termination, traffic routing, and application scaling.",
  "Created multi-stage Dockerfiles for Java, Node.js, Python, and Go services, separating build dependencies from runtime images and removing unnecessary packages and build artifacts to reduce image size; also worked with Docker networks, volumes, Docker Compose, and image publishing through Docker Hub and Amazon ECR.",
  "Deployed containerized applications on Amazon EKS using Kubernetes Deployments, Services, ConfigMaps, Secrets, and Ingress; used Helm for Kubernetes application packaging and configuration, and Argo CD for GitOps-based deployment synchronization.",
  "Used Ansible for basic configuration automation and wrote Python and Bash scripts to automate routine setup and system tasks.",
  "Integrated SonarQube and Trivy into Jenkins pipelines for automated code-quality analysis and container image vulnerability scanning before deployment, adding security checks to the CI/CD workflow.",
  "Configured AWS CloudWatch dashboards and alarms for CPU, memory, and API latency monitoring, while handling Linux administration including users and groups, file permissions, process management, log handling, cron jobs, and system-level troubleshooting.",
  "Set up Prometheus and Grafana for Kubernetes monitoring, using Prometheus to collect application and cluster metrics and Grafana dashboards to track resource usage and service health.",
  "Worked with Azure and GCP at a fundamental level, exploring core cloud services, IAM, networking, compute resources, and basic deployment workflows.",
  "Worked with MySQL and MongoDB/MongoDB Atlas for application connectivity, database configuration, access, and connection management."
 ] 
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
    title: 'EduBlitz Medical B2B ERP System',
    description:
      'Built and deployed a Medical ERP with Java Spring Boot microservices and React using AWS, Docker, Kubernetes, and MongoDB Atlas. Automated infrastructure with Terraform and CI/CD deployments with Jenkins, Helm, EKS, ALB, S3, CloudFront, and Route 53.',
    tags: [
      'Java Spring Boot', 'React 18', 'AWS EKS', 'AWS ALB', 'AWS CloudFront', 'AWS Route53', 'Docker',
          'kubernetes','Terraform', 'jenkins','Helm', 'MongoDB', 'JWT', 'OpenAPI',
    ],
    link: 'https://github.com/Sagar-dubey28/Medical-B2B-ERP-System',
    linkLabel: 'View Source Code',
    available: true,
  },
  {
    title: 'End-to-End Microservices CI/CD Platform on AWS EKS',
    description:
      'Built and deployed a microservices application using Java, Node.js, Python, Go, React, Docker, and AWS EKS. Set up AWS infrastructure with Terraform and automated CI/CD using Jenkins, GitHub Webhooks, SonarQube, Trivy, and Helm, with Prometheus, Grafana, and CloudWatch for monitoring.',
    tags: [
      'Java', 'Node.js', 'Python', 'Go', 'React', 'AWS EKS','Docker','Terraform',
      'Jenkins', 'ArgoCD', 'SonarQube', 'Trivy','Kubernetes', 'Helm'
    ],
    link: 'https://github.com/Sagar-dubey28/End-to-End-Microservices-CI-CD-Platform-on-AWS-EKS',
    linkLabel: 'View Source Code',
    available: true,
  },
]
