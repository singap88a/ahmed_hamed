import React from 'react';

const Toolchain = () => {
    const tools = [
        { name: 'AWS', icon: 'fab fa-aws' }, 
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'Kubernetes', icon: 'fas fa-dharmachakra' },
        { name: 'Terraform', icon: 'fas fa-code-branch' },
        { name: 'Jenkins', icon: 'fab fa-jenkins' },
        { name: 'GitHub Actions', icon: 'fab fa-github' },
        { name: 'Linux', icon: 'fab fa-linux' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'Bash', icon: 'fas fa-terminal' },
        { name: 'Prometheus', icon: 'fas fa-chart-line' },
        { name: 'Grafana', icon: 'fas fa-chart-pie' },
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'Nginx', icon: 'fas fa-server' },
        { name: 'YAML', icon: 'fas fa-file-code' },
        { name: 'VS Code', icon: 'fas fa-code' },
        { name: 'SSH', icon: 'fas fa-terminal' }
    ];

    return (
        <section id="toolchain" className="section py-24 relative overflow-hidden">
            <div className="container mx-auto px-8">
                <div className="section-header animate-up text-center mb-12">
                    <span className="section-subtitle text-[var(--clr-accent)] font-mono uppercase tracking-widest text-sm mb-2 block">Technologies</span>
                    <h2 className="section-title text-4xl md:text-5xl font-black">DevOps Toolchain</h2>
                </div>
                
                <div className="tech-badges flex flex-wrap justify-center gap-6 animate-up">
                    {tools.map((tool, idx) => (
                        <span key={idx} className="tech-badge flex items-center gap-2 px-6 py-3 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(0,210,255,0.1)] text-sm md:text-base font-semibold hover:border-[var(--clr-accent)] hover:bg-[rgba(0,210,255,0.1)] transition-all duration-300">
                            <i className={`${tool.icon} text-[var(--clr-accent)]`}></i>
                            {tool.name}
                        </span>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .tech-badge:hover {
                    box-shadow: 0 0 20px rgba(0, 210, 255, 0.2);
                    transform: translateY(-5px);
                }
                .light-theme .tech-badge {
                    background: rgba(0, 0, 0, 0.03);
                    border: 1px solid rgba(0, 0, 0, 0.1);
                    color: var(--clr-text);
                }
            ` }} />
        </section>
    );
};

export default Toolchain;
