class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #2d3748;
                    color: white;
                    padding: 4rem 2rem;
                }
                
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }
                
                .footer-logo {
                    display: flex;
                    align-items: center;
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                }
                
                .footer-logo-icon {
                    margin-right: 0.5rem;
                    color: #4CAF50;
                }
                
                .footer-description {
                    color: #a0aec0;
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                }
                
                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: #4a5568;
                    color: white;
                    transition: all 0.3s ease;
                }
                
                .social-link:hover {
                    background-color: #4CAF50;
                    transform: translateY(-3px);
                }
                
                .footer-heading {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: white;
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .footer-link {
                    color: #a0aec0;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .footer-link:hover {
                    color: #4CAF50;
                }
                
                .newsletter-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .newsletter-input {
                    padding: 0.75rem;
                    border-radius: 0.375rem;
                    border: none;
                    background-color: #4a5568;
                    color: white;
                }
                
                .newsletter-input::placeholder {
                    color: #a0aec0;
                }
                
                .newsletter-button {
                    background-color: #4CAF50;
                    color: white;
                    padding: 0.75rem;
                    border: none;
                    border-radius: 0.375rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .newsletter-button:hover {
                    background-color: #3e8e41;
                }
                
                .copyright {
                    margin-top: 4rem;
                    text-align: center;
                    color: #a0aec0;
                    padding-top: 2rem;
                    border-top: 1px solid #4a5568;
                }
            </style>
            
            <div class="container">
                <div class="footer-about">
                    <div class="footer-logo">
                        <i data-feather="share-2" class="footer-logo-icon"></i>
                        FoodBridge
                    </div>
                    <p class="footer-description">
                        Connecting surplus food with those in need through technology and community.
                    </p>
                    <div class="social-links">
                        <a href="#" class="social-link">
                            <i data-feather="facebook"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="twitter"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="instagram"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="linkedin"></i>
                        </a>
                    </div>
                </div>
                
                <div class="footer-links-section">
                    <h3 class="footer-heading">Quick Links</h3>
                    <div class="footer-links">
                        <a href="#problem" class="footer-link">The Problem</a>
                        <a href="#solution" class="footer-link">Our Solution</a>
                        <a href="#impact" class="footer-link">Our Impact</a>
                        <a href="#survey" class="footer-link">Survey Results</a>
                        <a href="#donate" class="footer-link">Donate Food</a>
                    </div>
                </div>
                
                <div class="footer-contact">
                    <h3 class="footer-heading">Contact Us</h3>
                    <div class="footer-links">
                        <a href="mailto:info@foodbridge.org" class="footer-link">
                            <i data-feather="mail" style="margin-right: 0.5rem;"></i>
                            info@foodbridge.org
                        </a>
                        <a href="tel:+1234567890" class="footer-link">
                            <i data-feather="phone" style="margin-right: 0.5rem;"></i>
                            +1 (234) 567-890
                        </a>
                        <a href="#" class="footer-link">
                            <i data-feather="map-pin" style="margin-right: 0.5rem;"></i>
                            123 Food St, City, Country
                        </a>
                    </div>
                </div>
                
                <div class="footer-newsletter">
                    <h3 class="footer-heading">Newsletter</h3>
                    <form class="newsletter-form">
                        <input type="email" placeholder="Your email address" class="newsletter-input" required>
                        <button type="submit" class="newsletter-button">Subscribe</button>
                    </form>
                </div>
            </div>
            
            <div class="copyright">
                &copy; ${new Date().getFullYear()} FoodBridge. All rights reserved.
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);