import React, { useState, useEffect, useRef } from 'react';

const AirplaneSocial = () => {
    const [isActive, setIsActive] = useState(false);
    const menuRef = useRef(null);
    const triggerRef = useRef(null);

    const toggleMenu = (e) => {
        e.stopPropagation();
        setIsActive(!isActive);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current && !menuRef.current.contains(event.target) &&
                triggerRef.current && !triggerRef.current.contains(event.target)
            ) {
                setIsActive(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const socialLinks = [
        { href: 'https://www.linkedin.com/in/ahmed-hamed-340570364', icon: 'fab fa-linkedin', class: 'ln', title: 'LinkedIn' },
        { href: 'https://github.com/ahmed1707hamed-tech', icon: 'fab fa-github', class: 'gh', title: 'GitHub' },
        { href: 'https://wa.me/201062425594', icon: 'fab fa-whatsapp', class: 'wa', title: 'WhatsApp' },
        { href: 'https://x.com/AhmedHa23091122', icon: 'fab fa-twitter', class: 'tw', title: 'Twitter' },
        { href: 'mailto:ahmed.1707.hamed@gmail.com', icon: 'fas fa-envelope', class: 'ml', title: 'Email' },
    ];

    return (
        <div className="floating-social-container">
            <button
                ref={triggerRef}
                className={`airplane-btn ${isActive ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Open Social Links"
            >
                <i className="fas fa-paper-plane"></i>
            </button>

            <div
                ref={menuRef}
                className={`floating-social-menu ${isActive ? 'active' : ''}`}
            >
                {socialLinks.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`f-social-link ${link.class}`}
                        title={link.title}
                    >
                        <i className={link.icon}></i>
                    </a>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .floating-social-container {
                    position: fixed;
                    bottom: 30px;
                    left: 30px;
                    z-index: 2000;
                    display: flex;
                    flex-direction: column-reverse;
                    align-items: center;
                    gap: 15px;
                }

                .airplane-btn {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: var(--clr-accent);
                    color: white;
                    border: none;
                    cursor: pointer;
                    font-size: 1.5rem;
                    box-shadow: 0 10px 25px rgba(0, 210, 255, 0.4);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .airplane-btn:hover {
                    transform: scale(1.1) rotate(-15deg);
                    background: var(--clr-accent-2);
                }

                .airplane-btn.active {
                    background: var(--clr-red);
                    transform: rotate(-45deg);
                }

                .floating-social-menu {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(20px);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .floating-social-menu.active {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }

                .f-social-link {
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                }

                .f-social-link:hover {
                    transform: scale(1.1) translateX(5px);
                }

                .f-social-link.ml { background-color: var(--clr-f-ml); }

                @media (max-width: 768px) {
                    .airplane-btn {
                        width: 48px;
                        height: 48px;
                        font-size: 1.2rem;
                    }
                    .f-social-link {
                        width: 38px;
                        height: 38px;
                        font-size: 0.9rem;
                    }
                }
            ` }} />
        </div>
    );
};

export default AirplaneSocial;
