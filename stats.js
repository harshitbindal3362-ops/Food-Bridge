class CustomStats extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                
                .stats-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                    text-align: center;
                }
                
                .stat-item {
                    background-color: #f7fafc;
                    border-radius: 1rem;
                    padding: 2rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                }
                
                .stat-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
                }
                
                .stat-number {
                    font-size: 3.5rem;
                    font-weight: 700;
                    background: linear-gradient(135deg, #4CAF50, #2196F3);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    line-height: 1;
                    margin-bottom: 0.5rem;
                }
                
                .stat-label {
                    font-size: 1.25rem;
                    color: #4a5568;
                }
                
                .stat-icon {
                    width: 3rem;
                    height: 3rem;
                    margin: 0 auto 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #4CAF50, #2196F3);
                    border-radius: 50%;
                    color: white;
                }
            </style>
            
            <div class="stats-container">
                <div class="stat-item">
                    <div class="stat-icon">
                        <i data-feather="package"></i>
                    </div>
                    <div class="stat-number counter" data-target="12500">0</div>
                    <div class="stat-label">Meals Saved</div>
                </div>
                
                <div class="stat-item">
                    <div class="stat-icon">
                        <i data-feather="users"></i>
                    </div>
                    <div class="stat-number counter" data-target="320">0</div>
                    <div class="stat-label">Food Donors</div>
                </div>
                
                <div class="stat-item">
                    <div class="stat-icon">
                        <i data-feather="home"></i>
                    </div>
                    <div class="stat-number counter" data-target="85">0</div>
                    <div class="stat-label">NGOs Helped</div>
                </div>
                
                <div class="stat-item">
                    <div class="stat-icon">
                        <i data-feather="cloud-rain"></i>
                    </div>
                    <div class="stat-number counter" data-target="18">0</div>
                    <div class="stat-label">Tons CO₂ Saved</div>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-stats', CustomStats);