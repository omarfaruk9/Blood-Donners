import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer class="footer py-5">
                <div class="w-50 mx-auto text-center py-5">
                    <div class=" mb-4">
                        <i class=" text-light mx-3 fab fa-twitter"></i>
                        <i class=" text-light mx-3 fab fa-google-plus-g"></i>
                        <i class=" text-light mx-3 fab fa-linkedin-in"></i>
                        <i class=" text-light mx-3 fab fa-instagram"></i>
                        <i class=" text-light mx-3 fas fa-envelope"></i>
                        <i class=" text-light mx-3 fab fa-facebook-f"></i>
                    </div>
                    <p class="text-muted">© 2021 MegaOne. made with love by themesindustry</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;