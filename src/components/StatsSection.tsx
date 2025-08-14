import { Users, Calendar, FileText, Briefcase, Settings, Zap } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '10,000+',
    label: 'Customers Served',
    description: 'Happy clients trust our services'
  },
  {
    icon: Calendar,
    number: '05+',
    label: 'Successful Years',
    description: 'Years of dedicated service'
  },
  {
    icon: FileText,
    number: '500K+',
    label: 'Documents Printed',
    description: 'High-quality documentation'
  },
  {
    icon: Briefcase,
    number: '1000+',
    label: 'Projects Completed',
    description: 'Successfully delivered projects'
  },
  {
    icon: Settings,
    number: '20+',
    label: 'Professional Services',
    description: 'Comprehensive service range'
  },
  {
    icon: Zap,
    number: '24/7',
    label: 'Power Backup',
    description: 'Uninterrupted service guarantee'
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Our <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-primary/30"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                <h4 className="text-xl font-semibold text-text-primary mb-2">
                  {stat.label}
                </h4>
                <p className="text-text-secondary">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;