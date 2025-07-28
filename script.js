document.addEventListener('DOMContentLoaded', function() {
    // Map Tooltip Functionality
    const markers = document.querySelectorAll('.map-marker');
    const tooltip = document.querySelector('.map-tooltip');
    const tooltipTitle = document.getElementById('tooltip-title');
    const tooltipType = document.getElementById('tooltip-type');
    const tooltipDesc = document.getElementById('tooltip-desc');
    
    markers.forEach(marker => {
        marker.addEventListener('mouseenter', function() {
            const title = this.getAttribute('data-title');
            const desc = this.getAttribute('data-desc');
            
            tooltipTitle.textContent = title;
            tooltipType.textContent = this.classList.contains('primary') ? 'Formation' : 
                                     this.classList.contains('accent') ? 'Expérience' : 
                                     this.classList.contains('ocean') ? 'Certification' : 'Engagement';
            tooltipDesc.textContent = desc;
            
            // Position tooltip
            const rect = this.getBoundingClientRect();
            const mapContainer = this.closest('.map-container');
            const mapRect = mapContainer.getBoundingClientRect();
            
            let left = rect.left - mapRect.left + rect.width/2;
            let top = rect.top - mapRect.top - 180;
            
            // Adjust if too close to edges
            if (left < 125) left = 125;
            if (left > mapRect.width - 125) left = mapRect.width - 125;
            if (top < 20) top = 20;
            
            tooltip.style.left = left + 'px';
            tooltip.style.top = top + 'px';
            tooltip.classList.add('show');
        });
        
        marker.addEventListener('mouseleave', function() {
            tooltip.classList.remove('show');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});