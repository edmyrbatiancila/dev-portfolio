import { Database, GitBranch, Globe, Palette, Server, Smartphone } from "lucide-react";

export const skills =[
    {
      category: 'Frontend',
      icon: <Globe className="h-6 w-6" />,
      color: 'from-blue-500 to-cyan-500',
      technologies: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Sass']
    },
    {
      category: 'Backend',
      icon: <Server className="h-6 w-6" />,
      color: 'from-green-500 to-emerald-500',
      technologies: ['Node.js', 'Python', 'Express', 'Django', 'GraphQL', 'REST APIs']
    },
    {
      category: 'Database',
      icon: <Database className="h-6 w-6" />,
      color: 'from-purple-500 to-violet-500',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase', 'MySQL']
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="h-6 w-6" />,
      color: 'from-pink-500 to-rose-500',
      technologies: ['React Native', 'Flutter', 'Expo', 'iOS', 'Android', 'PWA']
    },
    {
      category: 'DevOps',
      icon: <GitBranch className="h-6 w-6" />,
      color: 'from-orange-500 to-red-500',
      technologies: ['Docker', 'AWS', 'Vercel', 'Git', 'CI/CD', 'Kubernetes']
    },
    {
      category: 'Design',
      icon: <Palette className="h-6 w-6" />,
      color: 'from-indigo-500 to-purple-500',
      technologies: ['Figma', 'Adobe XD', 'Photoshop', 'UI/UX', 'Prototyping', 'Wireframing']
    }
  ];