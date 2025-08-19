import { Users, Calendar, FileText, Briefcase, Settings, Zap } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '100K+',
    label: 'Customers Served',
    description: 'Happy clients trust our services'
  },
  {
    icon: Calendar,
    number: '15+',
    label: 'Successful Years',
    description: 'Years of dedicated service'
  },
  {
    icon: FileText,
    number: '50M+',
    label: 'Documents Printed',
    description: 'High-quality documentation'
  },
  {
    icon: Briefcase,
    number: '50K+',
    label: 'Projects Completed',
    description: 'Successfully delivered projects'
  },
  {
    icon: Settings,
    number: '100+',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-4 sm:p-6 lg:p-8 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-primary/30"
              >
                <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 lg:mb-6">
                  <Icon className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-1 sm:mb-2">
                  {stat.number}
                </h3>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-text-primary mb-1 sm:mb-2">
                  {stat.label}
                </h4>
                <p className="text-xs sm:text-sm lg:text-base text-text-secondary">
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
