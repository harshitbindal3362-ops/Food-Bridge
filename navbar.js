class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background-color: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                }
                
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    font-weight: 700;
                    font-size: 1.5rem;
                    color: #2d3748;
                    text-decoration: none;
                }
                
                .logo-icon {
                    margin-right: 0.5rem;
                    color: #4CAF50;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .nav-link {
                    color: #4a5568;
                    text-decoration: none;
                    font-weight: 500;
                    position: relative;
                    transition: color 0.3s ease;
                }
                
                .nav-link:hover {
                    color: #4CAF50;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #4CAF50;
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .cta-button {
                    background-color: #4CAF50;
                    color: white;
                    padding: 0.5rem 1.5rem;
                    border-radius: 9999px;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }
                
                .cta-button:hover {
                    background-color: #3e8e41;
                    transform: translateY(-2px);
                }
                
                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                }
                
                .mobile-menu {
                    display: none;
                    flex-direction: column;
                    gap: 1rem;
                    padding: 1rem;
                    background-color: white;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                
                @media (max-width: 768px) {
                    .nav-links, .cta-button {
                        display: none;
                    }
                    
                    .mobile-menu-button {
                        display: block;
                    }
                    
                    .mobile-menu.active {
                        display: flex;
                    }
                }
            </style>
            
            <div class="container">
                <a href="/" class="logo">
                    <i data-feather="share-2" class="logo-icon"></i>
                    FoodBridge
                </a>
                
                <div class="nav-links">
                    <a href="#problem" class="nav-link">Problem</a>
                    <a href="#solution" class="nav-link">Solution</a>
                    <a href="#impact" class="nav-link">Impact</a>
                    <a href="#survey" class="nav-link">Survey</a>
                    <a href="#donate.html" class="cta-button">Donate</a>
                </div>
                
                <button class="mobile-menu-button">
                    <i data-feather="menu"></i>
                </button>
                
                <div class="mobile-menu hidden">
                    <a href="#problem" class="nav-link">Problem</a>
                    <a href="#solution" class="nav-link">Solution</a>
                    <a href="#impact" class="nav-link">Impact</a>
                    <a href="#survey" class="nav-link">Survey</a>
                    <a href="donate.html" class="cta-button animated-btn btn-donate">Donate</a>
                </div>
            </div>
        `;
        
        // Initialize mobile menu toggle
        const mobileMenuButton = this.shadowRoot.querySelector('.mobile-menu-button');
        const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                const icon = mobileMenuButton.querySelector('svg');
                if (icon) {
                    icon.setAttribute('data-feather', mobileMenu.classList.contains('hidden') ? 'menu' : 'x');
                    feather.replace();
                }
            });
        }
        
        // Change navbar style on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            } else {
                this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            }
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);